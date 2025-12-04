import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";

const steps = [
  {
    phase: "Phase 1",
    title: "Assessment & Architecture",
    bullets: [
      "Use-case evaluation and feasibility analysis",
      "Model + GPU resource planning",
      "Architecture design for scalable deployments",
    ],
  },
  {
    phase: "Phase 2",
    title: "Optimization & Build",
    bullets: [
      "Model quantization (INT8, FP8, FP16)",
      "Graph cleanup and operator fusion",
      "Custom kernels and performance tuning",
    ],
  },
  {
    phase: "Phase 3",
    title: "Deploy & Monitor",
    bullets: [
      "Containerization + GPU scheduling",
      "CI/CD pipelines for model updates",
      "Logging, metrics, and model-health monitoring",
    ],
  },
];

export function ProcessTimeline() {
  return (
    <section className="container-balanced py-20">
      <IntersectionAnimation animation="fade-in-up" className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Our Approach</p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground">From assessment to production</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          A systematic approach to building AI systems that meet strict performance requirements while integrating cleanly with your existing infrastructure.
        </p>
      </IntersectionAnimation>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <IntersectionAnimation
            key={step.phase}
            animation="fade-in-up"
            delay={0.1 * index}
            className="relative"
          >
            <Card className="h-full border-border">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{step.phase}</p>
              <h3 className="mt-3 text-lg font-semibold text-card-foreground">{step.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {step.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </IntersectionAnimation>
        ))}
      </div>
    </section>
  );
}
