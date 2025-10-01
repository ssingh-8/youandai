import { Lightbulb, Cpu, ShieldCheck } from "lucide-react";
import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";

const benefits = [
  {
    icon: Lightbulb,
    title: "Strategy anchored in business outcomes",
    description:
      "Identify the highest-leverage use cases tied to revenue, customer experience, and operational efficiency across your enterprise.",
  },
  {
    icon: Cpu,
    title: "Production-ready AI built responsibly",
    description:
      "GPU-accelerated infrastructure, secure data pipelines, and guardrails for both predictive and generative AI workloads.",
  },
  {
    icon: ShieldCheck,
    title: "Enablement that scales your teams",
    description:
      "Upskill stakeholders with tailored training, playbooks, and change management to sustain ongoing AI performance.",
  },
];

export function ValueProposition() {
  return (
    <section className="container-balanced py-20">
      <IntersectionAnimation animation="fade-in-up" className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Why You &amp; AI</p>
        <h2 className="mt-3 text-3xl font-semibold text-primary">
          We help leaders translate AI potential into measurable enterprise results
        </h2>
        <p className="mt-4 text-sm text-slate-600">
          Our senior architects bring 15+ years of experience across Fortune 500 transformation programs, aligning AI with business KPIs on multi-cloud environments.
        </p>
      </IntersectionAnimation>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {benefits.map((item, index) => (
          <IntersectionAnimation
            key={item.title}
            animation="fade-in-up"
            delay={0.15 * index}
            className="h-full"
          >
            <Card className="h-full border-primary/10 bg-white/95">
              <item.icon className="h-10 w-10 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </Card>
          </IntersectionAnimation>
        ))}
      </div>
    </section>
  );
}

