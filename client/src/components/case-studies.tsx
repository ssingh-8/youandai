import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";
import { Button } from "./ui/button";
import Link from "next/link";
import { Eye, Gauge, Server, Layers, Cpu } from "lucide-react";

const expertiseAreas = [
  {
    icon: Eye,
    title: "Latency-Critical Perception Systems",
    description:
      "Real-time computer vision and sensor fusion systems with strict timing constraints for safety-critical applications.",
  },
  {
    icon: Gauge,
    title: "Real-Time Decision Pipelines",
    description:
      "Sub-100ms inference pipelines with optimized batching, scheduling, and memory management for high-throughput environments.",
  },
  {
    icon: Server,
    title: "Large-Scale Distributed Training & Evaluation",
    description:
      "Multi-node training infrastructure with comprehensive evaluation harnesses and automated regression testing.",
  },
  {
    icon: Layers,
    title: "Multi-Modal Model Deployment",
    description:
      "Vision + language models deployed on GPU clusters with production-grade reliability and observability.",
  },
  {
    icon: Cpu,
    title: "End-to-End Performance Optimization",
    description:
      "Full-stack optimization from model architecture through quantization, graph compilation, and runtime tuning.",
  },
];

export function CaseStudies() {
  return (
    <div className="space-y-16 bg-white pb-24 pt-16">
      <section className="container-balanced space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Proven expertise</p>
        <h1 className="text-4xl font-semibold text-primary">Example Areas of Proven Expertise</h1>
        <p className="mx-auto max-w-3xl text-sm text-slate-600">
          Deep experience building and deploying high-performance AI systems across demanding production environments.
        </p>
      </section>

      <div className="container-balanced grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {expertiseAreas.slice(0, 3).map((area, index) => (
          <IntersectionAnimation key={area.title} animation="fade-in-up" delay={0.1 * index}>
            <Card className="h-full border-primary/10 bg-white/95 p-6">
              <area.icon className="h-10 w-10 text-accent" />
              <h2 className="mt-4 text-lg font-semibold text-primary">{area.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{area.description}</p>
            </Card>
          </IntersectionAnimation>
        ))}
      </div>
      
      <div className="container-balanced grid gap-6 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
        {expertiseAreas.slice(3).map((area, index) => (
          <IntersectionAnimation key={area.title} animation="fade-in-up" delay={0.1 * (index + 3)}>
            <Card className="h-full border-primary/10 bg-white/95 p-6">
              <area.icon className="h-10 w-10 text-accent" />
              <h2 className="mt-4 text-lg font-semibold text-primary">{area.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{area.description}</p>
            </Card>
          </IntersectionAnimation>
        ))}
      </div>

      <section className="container-balanced">
        <IntersectionAnimation animation="fade-in-up">
          <div className="rounded-3xl border border-primary/10 bg-accent-soft/80 p-10 shadow-card text-center space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              Have a similar challenge?
            </h2>
            <p className="text-sm text-primary/80 max-w-2xl mx-auto">
              If you need help with inference speed, GPU cost, or integrating AI into an existing workflow — let&apos;s talk.
            </p>
            <Link href="/contact">
              <Button size="lg">Book a Strategy Call</Button>
            </Link>
          </div>
        </IntersectionAnimation>
      </section>
    </div>
  );
}
