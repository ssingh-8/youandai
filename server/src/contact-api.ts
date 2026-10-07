import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import { z } from "zod";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(200).optional().default(""),
  service: z
    .enum([
      "AI consulting",
      "Software services",
      "AI search & AEO",
      "Project partnership",
      "Not sure yet",
    ])
    .optional()
    .default("Not sure yet"),
  goals: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional(),
});
export type Inquiry = z.infer<typeof contactSchema>;
export type ContactDependencies = {
  configured: boolean;
  send: (inquiry: Inquiry) => Promise<boolean>;
  archive?: (inquiry: Inquiry) => Promise<boolean>;
};

export function contactConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.RESEND_FROM &&
      process.env.RESEND_TO,
  );
}

function defaultDependencies(): ContactDependencies {
  return {
    configured: contactConfigured(),
    async send(d) {
      const result = await new Resend(process.env.RESEND_API_KEY).emails.send({
        from: process.env.RESEND_FROM!,
        to: [process.env.RESEND_TO!],
        subject: `New inquiry: ${d.service}`,
        replyTo: d.email,
        text: `Name: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company || "Not provided"}\nService: ${d.service}\n\n${d.goals}`,
      });
      return !result.error && Boolean(result.data?.id);
    },
    ...(process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
      ? {
          async archive(d: Inquiry) {
            const database = createClient(
              process.env.NEXT_PUBLIC_SUPABASE_URL!,
              process.env.SUPABASE_SERVICE_ROLE_KEY!,
            );
            const result = await database
              .from("contact_messages")
              .insert({
                name: d.name,
                email: d.email,
                company: d.company,
                goals: `[${d.service}] ${d.goals}`,
                created_at: new Date().toISOString(),
              });
            return !result.error;
          },
        }
      : {}),
  };
}

export function createContactApp(dependencies?: ContactDependencies) {
  const app = new Hono();
  app.use("/contact", bodyLimit({ maxSize: 16 * 1024 }));
  app.post("/contact", async (c) => {
    const parsed = contactSchema.safeParse(
      await c.req.json().catch(() => null),
    );
    if (!parsed.success)
      return c.json({ ok: false, error: "Please check the form fields." }, 400);
    const delivery = dependencies || defaultDependencies();
    if (!delivery.configured)
      return c.json(
        { ok: false, error: "Online inquiries are temporarily unavailable." },
        503,
      );
    try {
      // A resolved provider promise can still carry an error. Require an accepted email ID.
      if (!(await delivery.send(parsed.data)))
        return c.json(
          {
            ok: false,
            error: "Your inquiry could not be sent. Please try again.",
          },
          502,
        );
    } catch {
      return c.json(
        {
          ok: false,
          error: "Your inquiry could not be sent. Please try again.",
        },
        502,
      );
    }
    if (delivery.archive) {
      try {
        if (!(await delivery.archive(parsed.data)))
          console.error("Contact archive failed after email acceptance.");
      } catch {
        console.error("Contact archive unavailable after email acceptance.");
      }
    }
    return c.json({ ok: true });
  });
  return app;
}
