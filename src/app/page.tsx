import { Hero } from "@/components/hero";
import { ValueProposition } from "@/components/value-proposition";
import { ProcessTimeline } from "@/components/process-timeline";
import { Testimonials } from "@/components/testimonials";
import { ROICalculator } from "@/components/roi-calculator";
import { DualCTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <ValueProposition />
      <ProcessTimeline />
      <Testimonials />
      <ROICalculator />
      <DualCTASection />
    </div>
  );
}

