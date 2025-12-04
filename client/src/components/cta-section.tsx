import { Button } from "./ui/button";
import { IntersectionAnimation } from "./animations";
import Link from "next/link";

export function DualCTASection() {
  return (
    <IntersectionAnimation
      animation="fade-in-up"
      className="container-balanced rounded-3xl border border-white/20 bg-white/90 p-10 shadow-hero backdrop-blur"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Next step
          </p>
          <h2 className="text-2xl font-semibold text-primary">Ready to discuss your AI challenge?</h2>
          <p className="max-w-xl text-sm text-slate-600">
            If you need help with inference speed, GPU cost, or integrating AI into an existing workflow — that&apos;s our specialty.
          </p>
        </div>
        <Link href="/contact">
          <Button size="lg">Book a Strategy Call</Button>
        </Link>
      </div>
    </IntersectionAnimation>
  );
}
