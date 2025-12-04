"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().min(2, "Company required"),
  challenge: z.string().min(10, "Tell us a bit more about your challenge"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  function onSubmit(values: FormValues) {
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        toast.success("Thanks for reaching out", {
          description: "We'll get back to you soon.",
        });
        form.reset();
      })
      .catch(() => {
        toast.error("Something went wrong", {
          description: "Please try again or email hello@youandai.co.",
        });
      });
  }

  return (
    <div className="rounded-3xl border border-primary/10 bg-white/95 p-10 shadow-card">
      <h2 className="text-xl font-semibold text-primary">Book a strategy call</h2>
      <p className="mt-2 text-sm text-slate-600">
        Tell us about your AI deployment or performance challenge and we&apos;ll schedule a call to discuss.
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Name" placeholder="Your name" error={form.formState.errors.name?.message} {...form.register("name")} />
          <FormField label="Email" placeholder="you@company.com" type="email" error={form.formState.errors.email?.message} {...form.register("email")} />
        </div>
        <FormField label="Company" placeholder="Company name" error={form.formState.errors.company?.message} {...form.register("company")} />
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Your challenge</label>
          <textarea
            rows={5}
            placeholder="Describe your AI deployment, performance, or integration challenge..."
            className="w-full rounded-2xl border border-primary/10 px-4 py-3 text-sm text-primary shadow-sm focus:border-accent focus:outline-none"
            {...form.register("challenge")}
          />
          {form.formState.errors.challenge && (
            <p className="text-xs text-red-500">{form.formState.errors.challenge.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Book a Strategy Call
        </Button>
      </form>
    </div>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

function FormField({ label, error, ...props }: FieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{label}</label>
      <input
        {...props}
        className="w-full rounded-2xl border border-primary/10 px-4 py-3 text-sm text-primary shadow-sm focus:border-accent focus:outline-none"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
