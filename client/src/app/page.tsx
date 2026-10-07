import { Hero } from "@/components/hero";
import { CompanyFAQ } from "@/components/company-faq";
import { ValueProposition } from "@/components/value-proposition";
import { ProcessTimeline } from "@/components/process-timeline";
import { DualCTASection } from "@/components/cta-section";
import { ProjectsPreview } from "@/components/projects";
import { pageMetadata } from "@/lib/metadata";
import { description } from "@/lib/business";
export const metadata = pageMetadata(
  "AI Consulting, Software & AEO",
  description,
  "/",
);
export default function HomePage() {
  return (
    <div className="space-y-20 pb-20 sm:space-y-24">
      <Hero />
      <ValueProposition />
      <ProjectsPreview />
      <ProcessTimeline />
      <CompanyFAQ />
      <DualCTASection />
    </div>
  );
}
