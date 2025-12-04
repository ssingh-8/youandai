import { ArrowRight, Cpu, Gauge, Server, Layers, Shield, Cloud } from "lucide-react";
import Link from "next/link";
import { IntersectionAnimation } from "./animations";
import { Button } from "./ui/button";

const expertiseAreas = [
  "GPU-accelerated inference",
  "Model optimization (quantization, pruning, TensorRT-LLM–style graph simplification)",
  "End-to-end deployment pipelines for production environments",
  "Integrating GenAI into existing enterprise and legacy stacks",
  "Safety-critical, latency-sensitive applications",
  "Large-scale on-prem and multi-cloud GPU infrastructure",
];

const deliverables = [
  {
    icon: Gauge,
    title: "Strict Latency",
    description: "Systems that meet strict latency requirements",
  },
  {
    icon: Cpu,
    title: "Cost-Optimized",
    description: "Cost-optimized GPU deployments",
  },
  {
    icon: Layers,
    title: "Accurate Models",
    description: "Accurate, robust models tailored to your environment",
  },
  {
    icon: Server,
    title: "Clean Integration",
    description: "Clean integration with your existing workflows",
  },
  {
    icon: Shield,
    title: "Production-Grade",
    description: "Production-grade reliability and observability",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-24 pt-28 text-white">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary" />

      <div className="relative container-balanced">
        <IntersectionAnimation animation="fade-in-up" className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-white/80">
            <Cloud className="h-4 w-4 text-accent" />
            High-Performance AI Deployment
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.5rem]">
              AI Systems Built for
              <span className="block text-accent">the Real World</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              We design, build, and deploy AI systems that don&apos;t just demo well — they run fast, reliably, and at scale.
            </p>
          </div>

          <Link href="/contact">
            <Button size="lg" className="shadow-accent">
              Book a Strategy Call
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </IntersectionAnimation>

        <IntersectionAnimation
          animation="fade-in-up"
          delay={0.15}
          className="mt-16 grid gap-10 lg:grid-cols-2"
        >
          {/* Expertise Areas */}
          <div className="glass-panel">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">
                Specialized in High-Performance AI Deployment
              </p>
              <p className="text-sm text-slate-600">
                Our expertise sits at the intersection of:
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                {expertiseAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-primary font-medium pt-2">
                If you need AI that works under real constraints — speed, memory, cost, reliability — that&apos;s our lane.
              </p>
            </div>
          </div>

          {/* What We Deliver */}
          <div className="glass-panel">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">
                What We Deliver
              </p>
              <div className="space-y-4">
                {deliverables.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-xl border border-primary/10 bg-white/80 p-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                      <item.icon className="h-4 w-4 text-accent" />
                    </div>
                    <p className="text-sm text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </IntersectionAnimation>
      </div>
    </section>
  );
}
