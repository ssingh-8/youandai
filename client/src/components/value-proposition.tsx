import { Zap, DollarSign, Target, Workflow, Activity } from "lucide-react";
import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";

const benefits = [
  {
    icon: Zap,
    title: "Low-Latency Systems",
    description:
      "Sub-100ms inference goals with optimized prefill/decode separation and token throughput engineering.",
  },
  {
    icon: DollarSign,
    title: "Cost-Optimized GPU Usage",
    description:
      "Right-sizing GPU deployments through intelligent batching, scheduling, and resource management.",
  },
  {
    icon: Target,
    title: "Accurate & Robust Models",
    description:
      "Models tailored to your specific environment with comprehensive evaluation harnesses and regression testing.",
  },
  {
    icon: Workflow,
    title: "Clean Workflow Integration",
    description:
      "Seamless integration with existing enterprise systems, ERPs, CRMs, and internal tools.",
  },
  {
    icon: Activity,
    title: "Production Reliability",
    description:
      "Robust fallbacks, comprehensive monitoring, and observability for zero-downtime operations.",
  },
];

export function ValueProposition() {
  return (
    <section className="container-balanced py-20">
      <IntersectionAnimation animation="fade-in-up" className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Why You &amp; AI</p>
        <h2 className="mt-3 text-3xl font-semibold text-primary">
          AI that works under real constraints
        </h2>
        <p className="mt-4 text-sm text-slate-600">
          No buzzwords. No &quot;magic AI button.&quot; Just rigorous engineering focused on speed, memory, cost, and reliability.
        </p>
      </IntersectionAnimation>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.slice(0, 3).map((item, index) => (
          <IntersectionAnimation
            key={item.title}
            animation="fade-in-up"
            delay={0.1 * index}
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
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
        {benefits.slice(3).map((item, index) => (
          <IntersectionAnimation
            key={item.title}
            animation="fade-in-up"
            delay={0.1 * (index + 3)}
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
