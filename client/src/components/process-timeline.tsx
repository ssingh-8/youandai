const steps = [
  {
    number: "01",
    title: "Understand & scope",
    description:
      "Talk through the problem, define the deliverables, and agree on priorities, budget, and what success looks like.",
  },
  {
    number: "02",
    title: "Build & review",
    description:
      "Work in manageable stages, share progress, and use your feedback to test and refine the result.",
  },
  {
    number: "03",
    title: "Launch & support",
    description:
      "Hand over the work with documentation and agree on any ongoing maintenance, measurement, or improvements.",
  },
];
export function ProcessTimeline() {
  return (
    <section className="container-balanced">
      <p className="eyebrow">Working together</p>
      <h2 className="section-title">Clear steps. Shared expectations.</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="border-t border-border pt-6">
            <p className="font-mono text-sm text-muted-foreground">
              {step.number}
            </p>
            <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
