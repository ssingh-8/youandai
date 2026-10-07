"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { business } from "@/lib/business";
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(254),
  company: z.string().trim().max(200),
  service: z.enum([
    "AI consulting",
    "Software services",
    "AI search & AEO",
    "Project partnership",
    "Not sure yet",
  ]),
  goals: z
    .string()
    .trim()
    .min(10, "Tell us a bit more about your project")
    .max(5000),
  website: z.string().max(0),
});
type Values = z.infer<typeof schema>;
const fieldStyle =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent";
export function ContactForm({ available }: { available: boolean }) {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "Not sure yet",
      goals: "",
      website: "",
    },
  });
  const [status, setStatus] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);
  async function onSubmit(values: Values) {
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error("Delivery failed");
      setStatus({
        kind: "success",
        text: "Your inquiry has been sent. Thank you for getting in touch.",
      });
      form.reset();
    } catch {
      setStatus({
        kind: "error",
        text: `Your inquiry could not be sent. Your details are still here so you can try again.${business.email ? ` You can also email ${business.email}.` : ""}`,
      });
    }
  }
  if (!available)
    return (
      <div className="h-fit rounded-2xl border border-border bg-card p-8">
        <h2 className="text-xl font-semibold">Let’s connect</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Online inquiries are temporarily unavailable.
          {business.email
            ? " Please contact us directly by email."
            : business.bookingUrl
              ? " Please use the scheduling link to get in touch."
              : " Please check back soon."}
        </p>
        {business.email && (
          <a className="action-link mt-6" href={`mailto:${business.email}`}>
            Email us
          </a>
        )}
      </div>
    );
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-xl font-semibold">A little about your project</h2>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-7 space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {(
            [
              {
                name: "name",
                label: "Your name",
                type: "text",
                autoComplete: "name",
                maxLength: 120,
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                autoComplete: "email",
                maxLength: 254,
              },
            ] as const
          ).map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                maxLength={field.maxLength}
                required
                className={fieldStyle}
                aria-invalid={Boolean(form.formState.errors[field.name])}
                aria-describedby={
                  form.formState.errors[field.name]
                    ? `${field.name}-error`
                    : undefined
                }
                {...form.register(field.name)}
              />
              {form.formState.errors[field.name] && (
                <p
                  id={`${field.name}-error`}
                  className="mt-2 text-xs text-destructive"
                >
                  {form.formState.errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium">
            Company or project{" "}
            <span className="font-normal text-muted-foreground">
              (optional)
            </span>
          </label>
          <input
            id="company"
            autoComplete="organization"
            maxLength={200}
            className={fieldStyle}
            {...form.register("company")}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium">
            What can we help with?
          </label>
          <select
            id="service"
            className={fieldStyle}
            {...form.register("service")}
          >
            {schema.shape.service.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="goals" className="mb-2 block text-sm font-medium">
            Your project
          </label>
          <textarea
            id="goals"
            rows={5}
            required
            maxLength={5000}
            placeholder="What would you like to achieve? Include timing or a budget range if you have one."
            className={fieldStyle}
            aria-invalid={Boolean(form.formState.errors.goals)}
            aria-describedby={
              form.formState.errors.goals ? "goals-error" : undefined
            }
            {...form.register("goals")}
          />
          {form.formState.errors.goals && (
            <p id="goals-error" className="mt-2 text-xs text-destructive">
              {form.formState.errors.goals.message}
            </p>
          )}
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...form.register("website")}
          />
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          We use the details you send to respond to your inquiry. Please leave
          out passwords, financial records, and other sensitive information.
          {business.privacyUrl && (
            <>
              {" "}
              <a className="underline" href={business.privacyUrl}>
                Read our privacy notice.
              </a>
            </>
          )}
        </p>
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Sending…" : "Send inquiry"}
        </Button>
        {status && (
          <p
            role={status.kind === "error" ? "alert" : "status"}
            className={`text-sm ${status.kind === "error" ? "text-destructive" : "text-foreground"}`}
          >
            {status.text}
          </p>
        )}
      </form>
    </div>
  );
}
