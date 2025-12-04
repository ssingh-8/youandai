import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { IntersectionAnimation } from "./animations";
import { Brain, Zap, Server, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "AI Strategy & Architecture",
    icon: Brain,
    description:
      "We help you decide what to build, how to build it, and how to deploy it without burning cycles on unnecessary tech.",
    features: [
      "Use-case evaluation and feasibility analysis",
      "Architecture diagrams for scalable deployments",
      "Model + GPU resource planning",
      "Cost projections and optimization paths",
      "Integration plan for existing systems (ERP, CRM, internal tools)",
    ],
    tagline: "No buzzwords. Just the shortest path to a working, measurable AI solution.",
  },
  {
    title: "High-Performance Inference Optimization",
    icon: Zap,
    description:
      "This is our strongest area of expertise. We design systems that run faster, cheaper, and more reliably.",
    features: [
      "Model quantization (INT8, FP8, FP16)",
      "ONNX graph cleanup + operator fusion",
      "TensorRT-style optimizations",
      "Custom kernels and plugin-level tuning",
      "Multi-model scheduling and memory management",
      "Benchmarking + profiling (prefill/decode separation, token throughput)",
      "DLA/edge compatibility planning",
    ],
    tagline: "If your current model is slow, expensive, or unstable — we fix that.",
  },
  {
    title: "Production Deployment & MLOps",
    icon: Server,
    description:
      "We build pipelines that take models from notebooks → production reliably.",
    features: [
      "Containerization + GPU scheduling",
      "Multi-cloud + on-prem deployment (Kubernetes, edge devices, GPU clusters)",
      "CI/CD pipelines for model updates",
      "Evaluation harnesses, regression testing, automated benchmarking",
      "Logging, metrics, and model-health monitoring",
      "Safety-critical workflows (versioning, auditability, reproducibility)",
    ],
    tagline: "Especially valuable if you need repeatability, traceability, and zero-downtime deployment.",
  },
  {
    title: "Custom GenAI Integrations",
    icon: Sparkles,
    description:
      "We add generative AI where it actually makes sense — not as a gimmick.",
    features: [
      "RAG systems with hardened evaluation",
      "Multi-modal pipelines (vision + language)",
      "Workflow agents linked to real business tools",
      "Fine-tuning or adapting foundation models to your domain",
      "Fast inference endpoints with guardrails and observability",
    ],
    tagline: "High-performance GenAI that lives inside your existing workflows, not bolted on as a side-app.",
  },
];

export function ServicesOverview() {
  return (
    <div className="space-y-16 bg-background pb-24 pt-16">
      <section className="container-balanced space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">What we deliver</p>
        <h1 className="text-4xl font-semibold text-foreground">Services built for real-world AI deployment</h1>
        <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
          From strategy to optimization to production — we help you build AI systems that meet strict latency, cost, and reliability requirements.
        </p>
      </section>

      <div className="container-balanced space-y-8">
        {services.map((service, index) => (
          <IntersectionAnimation key={service.title} animation="fade-in-up" delay={0.1 * index}>
            <Card className="border-border p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                <div className="lg:w-1/3 space-y-4">
                  <service.icon className="h-10 w-10 text-accent" />
                  <h2 className="text-2xl font-semibold text-card-foreground">{service.title}</h2>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <p className="text-sm font-medium text-card-foreground">{service.tagline}</p>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">
                    {service.title === "AI Strategy & Architecture" ? "Deliverables include:" : 
                     service.title === "High-Performance Inference Optimization" ? "Core capabilities:" :
                     service.title === "Production Deployment & MLOps" ? "Expertise includes:" :
                     "Typical integrations:"}
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                    {service.features.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </IntersectionAnimation>
        ))}
      </div>

      <section className="container-balanced">
        <IntersectionAnimation animation="fade-in-up">
          <div className="rounded-3xl border border-border bg-accent-soft p-10 shadow-card text-center space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Ready to discuss your AI deployment challenge?
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              If you need help with inference speed, GPU cost, or integrating AI into an existing workflow — that&apos;s our specialty.
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
