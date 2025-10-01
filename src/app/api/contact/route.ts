import { NextResponse } from "next/server";
import { z } from "zod";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const contactPayload = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  goals: z.string().min(10),
});

// Ensure this route runs on the Node runtime (needed for some SDKs)
export const runtime = "nodejs";

// --- Integrations configured via environment variables ---
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM; // e.g., "noreply@your-domain.com" (verified in Resend)
const RESEND_TO = process.env.RESEND_TO || process.env.CONTACT_FORWARD_TO; // where to forward contact emails

// Supabase (optional; stores the contact in a table)
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Initialize clients if keys are present
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactPayload.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid payload" },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // --- Fan-out to integrations (email, DB, Slack) ---
    const text = [
      `New contact request`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      `Goals:`,
      data.goals,
    ].join("\n");
    // TODO: Send this to your CRM, email service, or data store.
    console.log("Contact request received", data);

    const tasks: Promise<any>[] = [];
    // 1) Email forward via Resend (if configured)
    if (resend && RESEND_FROM && RESEND_TO) {
      tasks.push(
        resend.emails.send({
          from: RESEND_FROM,
          to: [RESEND_TO],
          subject: `New contact from ${data.name}`,
          text,
        })
      );
    }

    // 2) Persist to Supabase (if configured)
    if (supabase) {
      const insertPromise = supabase
        .from("contact_messages")
        .insert([
          {
            name: data.name,
            email: data.email,
            company: data.company,
            goals: data.goals,
            created_at: new Date().toISOString(),
          },
        ])
        .then(({ data, error }) => {
          if (error) throw error;
          return data;
        });

      tasks.push(insertPromise as Promise<any>);
    }

    // Execute all configured tasks (don't fail the request on partial errors)
    const results = await Promise.allSettled(tasks);
    for (const r of results) {
      if (r.status === "rejected") {
        console.error("Contact integration failed:", r.reason);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error handling contact request", error);
    return NextResponse.json(
      { ok: false, message: "Unexpected error" },
      { status: 500 }
    );
  }
}
