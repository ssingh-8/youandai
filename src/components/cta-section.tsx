import { Button } from "./ui/button";
import { IntersectionAnimation } from "./animations";

export function DualCTASection() {
  return (
    <IntersectionAnimation
      animation="fade-in-up"
      className="container-balanced -mt-20 rounded-3xl border border-white/20 bg-white/90 p-10 shadow-hero backdrop-blur"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Next step
          </p>
          <h2 className="text-2xl font-semibold text-primary">Let’s design your measurable AI roadmap</h2>
          <p className="max-w-xl text-sm text-slate-600">
            Partner with senior AI architects to evaluate your data readiness, prioritize high-value initiatives, and launch quickly with proven governance.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg">Book a Free Strategy Call</Button>
          <Button variant="outline" size="lg" className="border-primary/20 text-primary">
            Download Free AI Readiness Guide
          </Button>
        </div>
      </div>
    </IntersectionAnimation>
  );
}

