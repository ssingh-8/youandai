import { Hero } from "@/components/hero";
import { CompanyFAQ } from "@/components/company-faq";
import { ValueProposition } from "@/components/value-proposition";
import { ProcessTimeline } from "@/components/process-timeline";
import { DualCTASection } from "@/components/cta-section";
import { ProjectsPreview } from "@/components/projects";
import { pageMetadata } from "@/lib/metadata";
import { business, description } from "@/lib/business";
import { StructuredData } from "@/components/structured-data";
import Link from "next/link";
import { guides } from "@/content/guides";
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
      <section className="container-balanced">
        <p className="eyebrow">Practical guidance</p>
        <h2 className="section-title">Make an informed next move.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <h3 className="text-xl font-semibold">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="hover:underline"
                >
                  {guide.title}
                </Link>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {guide.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <DualCTASection />
      {business.websiteUrl && (
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": new URL("/#website", business.websiteUrl).href,
            name: business.name,
            alternateName: "You and AI",
            url: business.websiteUrl,
            publisher: {
              "@id": new URL("/#organization", business.websiteUrl).href,
            },
          }}
        />
      )}
    </div>
  );
}
