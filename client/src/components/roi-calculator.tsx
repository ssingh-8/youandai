"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";
import { toast } from "sonner";

const calculatorSchema = z.object({
  annualRevenue: z.number().min(1),
  aiAdoption: z.number().min(0).max(100),
  teamSize: z.number().min(1).max(1000),
  automationPotential: z.number().min(0).max(100),
});

type CalculatorInputs = z.infer<typeof calculatorSchema>;

const defaultValues: CalculatorInputs = {
  annualRevenue: 120,
  aiAdoption: 20,
  teamSize: 40,
  automationPotential: 35,
};

function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value * 1_000_000);
}

export function ROICalculator() {
  const form = useForm<CalculatorInputs>({
    resolver: zodResolver(calculatorSchema),
    defaultValues,
  });

  const values = form.watch();

  const results = useMemo(() => {
    const revenueImpact = values.annualRevenue * (values.aiAdoption / 100) * 0.6;
    const costSavings = values.teamSize * (values.automationPotential / 100) * 0.08;
    const timeline = Math.max(3, Math.round(12 - values.aiAdoption / 10));

    return {
      revenueImpact: formatUSD(revenueImpact),
      costSavings: formatUSD(costSavings),
      payback: `${timeline} months`,
      roiMultiple: `${(revenueImpact / 20).toFixed(1)}x`,
    };
  }, [values]);

  function onSubmit(data: CalculatorInputs) {
    toast.success("ROI projection calculated", {
      description: `Potential ROI multiple of ${(data.annualRevenue * (data.aiAdoption / 100) * 0.6) / 20}x.`,
    });
  }

  return (
    <section className="container-balanced py-20">
      <IntersectionAnimation animation="fade-in-up" className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Business case</p>
        <h2 className="mt-3 text-3xl font-semibold text-primary">
          Model your AI ROI opportunity in minutes
        </h2>
        <p className="mt-4 text-sm text-slate-600">
          Adjust key variables to estimate the revenue lift, cost savings, and payback period for your AI initiatives.
        </p>
      </IntersectionAnimation>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
        <Card className="border-primary/10 bg-white/95">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField label="Annual revenue (USD millions)" name="annualRevenue" form={form} min={1} max={500} step={5} />
            <FormField label="Current AI adoption (%)" name="aiAdoption" form={form} min={0} max={100} step={5} />
            <FormField label="Team size in scope" name="teamSize" form={form} min={1} max={200} step={5} />
            <FormField label="Automation potential (%)" name="automationPotential" form={form} min={0} max={100} step={5} />
            <Button type="submit" className="w-full">
              Update projections
            </Button>
          </form>
        </Card>

        <Card className="border-accent/40 bg-accent-soft/70 text-primary">
          <h3 className="text-lg font-semibold">Projected outcomes</h3>
          <dl className="mt-6 space-y-4 text-sm">
            <ProjectionItem label="Potential revenue impact" value={results.revenueImpact} />
            <ProjectionItem label="Annual cost savings" value={results.costSavings} />
            <ProjectionItem label="Payback period" value={results.payback} />
            <ProjectionItem label="ROI multiple" value={results.roiMultiple} />
          </dl>
          <p className="mt-6 text-xs text-primary/70">
            *Based on benchmarks from Fortune 100 and high-growth clients who deploy predictive and generative AI with You &amp; AI.
          </p>
        </Card>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  name: keyof CalculatorInputs;
  form: ReturnType<typeof useForm<CalculatorInputs>>;
  min: number;
  max: number;
  step: number;
};

function FormField({ label, name, form, min, max, step }: FormFieldProps) {
  const error = form.formState.errors[name]?.message;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        <label className="text-slate-500">{label}</label>
        <span className="text-slate-400">
          {form.watch(name)}
          {name === "annualRevenue" ? "M" : "%"}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={form.watch(name)}
        onChange={(event) => form.setValue(name, Number(event.target.value))}
        className="w-full"
      />
      {error && <p className="text-xs text-red-500">{String(error)}</p>}
    </div>
  );
}

function ProjectionItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <dt className="text-xs uppercase tracking-[0.2em] text-primary/70">{label}</dt>
      <dd className="text-2xl font-semibold text-primary">{value}</dd>
    </div>
  );
}

