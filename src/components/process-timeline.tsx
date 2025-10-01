import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";

const steps = [
  {
    phase: "Weeks 1-3",
    title: "Discovery & Strategic Alignment",
    bullets: ["Stakeholder workshops", "Data & infrastructure assessment", "ROI business case"],
  },
  {
    phase: "Weeks 4-8",
    title: "Design & Pilot Build",
    bullets: ["Model architecture", "Data pipelines & governance", "Pilot deployment"],
  },
  {
    phase: "Weeks 9-12",
    title: "Scale & Enable",
    bullets: ["Production rollout", "Training & change management", "Operational handoff"],
  },
];

export function ProcessTimeline() {
  return (
    <section className="container-balanced py-20">
      <IntersectionAnimation animation="fade-in-up" className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Delivery model</p>
        <h2 className="mt-3 text-3xl font-semibold text-primary">A proven 12-week acceleration program</h2>
        <p className="mt-4 text-sm text-slate-600">
          Move from strategy to production with a cross-functional team that de-risks AI investments and builds internal capability.
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
            <Card className="h-full border-primary/10 bg-white/95">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{step.phase}</p>
              <h3 className="mt-3 text-lg font-semibold text-primary">{step.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
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

