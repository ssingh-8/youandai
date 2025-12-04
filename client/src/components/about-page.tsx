import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";
import { Zap, Shield, Eye, DollarSign, Wrench } from "lucide-react";

const philosophyPrinciples = [
  { icon: Zap, title: "Fast" },
  { icon: Shield, title: "Stable" },
  { icon: Eye, title: "Understandable" },
  { icon: DollarSign, title: "Cost-efficient" },
  { icon: Wrench, title: "Maintainable" },
];

const background = [
  "Designing and deploying high-performance GPU inference pipelines",
  "Building safety-critical AI functionality for real-world applications",
  "Managing end-to-end model lifecycles: data → training → optimization → deployment",
  "Working with some of the most demanding latency and reliability requirements in the industry",
  "Integrating GenAI into legacy enterprise systems without breaking workflows",
  "Leading engineering teams across perception, inference, MLOps, infrastructure, and platform tooling",
];

const founderExpertise = [
  "GPU-accelerated inference and model optimization",
  "Large-scale model deployment pipelines",
  "Safety-critical perception and multimodal AI systems",
  "Quantization flows, ONNX/TensorRT optimization, plugin-level performance tuning",
  "Multi-cloud GPU infrastructure",
  "End-to-end MLOps in complex, regulated environments",
  "Leading teams responsible for production AI in automotive-grade and enterprise-grade systems",
];

export function AboutPage() {
  return (
    <div className="space-y-20 bg-background pb-24 pt-16">
      <section className="container-balanced space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Who we are</p>
        <h1 className="text-4xl font-semibold text-foreground">Engineers who ship production AI</h1>
        <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
          We understand how to ship AI systems where performance, correctness, and reliability truly matter.
        </p>
      </section>

      <section className="container-balanced grid gap-10 lg:grid-cols-2">
        <IntersectionAnimation animation="fade-in-up" className="glass-panel">
          <h2 className="text-2xl font-semibold text-card-foreground">Our Background</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            You &amp; AI was founded by engineers with extensive experience building production-grade AI systems used by millions of users globally. Our background includes:
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {background.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </IntersectionAnimation>

        <IntersectionAnimation animation="fade-in-up" delay={0.15} className="glass-panel">
          <h2 className="text-2xl font-semibold text-card-foreground">Our Philosophy</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            AI should be:
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {philosophyPrinciples.map((principle) => (
              <div key={principle.title} className="flex items-center gap-3 rounded-xl border border-border bg-card/80 p-3">
                <principle.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-card-foreground">{principle.title}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-border bg-secondary p-4">
            <p className="text-sm text-foreground font-medium">
              No hype. No &quot;magic AI button.&quot;
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Just rigorous engineering.
            </p>
          </div>
        </IntersectionAnimation>
      </section>

      <section className="container-balanced">
        <IntersectionAnimation animation="fade-in-up">
          <Card className="border-border p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
              <div className="lg:w-1/3 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Founder</p>
                <h2 className="text-2xl font-semibold text-card-foreground">Technical Leadership</h2>
                <p className="text-sm text-muted-foreground">
                  A seasoned machine-learning and systems engineer with deep experience across the full AI deployment stack.
                </p>
              </div>
              <div className="lg:w-2/3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  Areas of expertise:
                </p>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                  {founderExpertise.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  Their work spans thousands of deployed models, distributed training pipelines, and high-performance inference systems powering real products.
                </p>
              </div>
            </div>
          </Card>
        </IntersectionAnimation>
      </section>
    </div>
  );
}
