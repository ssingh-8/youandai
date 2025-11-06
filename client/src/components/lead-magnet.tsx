"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Please enter your first name"),
  email: z.string().email("Enter a valid work email"),
  company: z.string().min(2, "Company name required"),
});

type FormValues = z.infer<typeof schema>;

export function LeadMagnetDialogTrigger({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  function onSubmit(values: FormValues) {
    toast.success("Guide on its way", {
      description: `We emailed the AI Readiness Guide to ${values.email}.`,
    });
    form.reset();
    setOpen(false);
  }

  return (
    <div>
      <div onClick={() => setOpen(true)}>{children}</div>
      {mounted && open &&
        createPortal(
          <div className="fixed inset-0 z-[1000] overflow-y-auto bg-black/40 py-12">
            <div className="mx-auto w-full max-w-xl rounded-3xl border border-primary/10 bg-white p-8 shadow-hero">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">Download the AI Readiness Guide</h3>
                <p className="mt-2 text-sm text-slate-600">
                  A practical playbook covering data strategy, infrastructure, operating models, and governance to launch AI responsibly.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-sm text-slate-400 transition hover:text-primary"
                aria-label="Close guide form"
              >
                Close
              </button>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <FormField label="First name" placeholder="Jordan" {...form.register("name")}
                error={form.formState.errors.name?.message}
              />
              <FormField label="Work email" placeholder="jordan@company.com" type="email" {...form.register("email")}
                error={form.formState.errors.email?.message}
              />
              <FormField label="Company" placeholder="Acme Corp" {...form.register("company")}
                error={form.formState.errors.company?.message}
              />
              <Button type="submit" className="w-full">
                Send me the guide
              </Button>
            </form>
          </div>
          </div>,
          document.body
        )}
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

