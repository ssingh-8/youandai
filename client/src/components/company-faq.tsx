import Link from "next/link";
import { business } from "@/lib/business";

export function CompanyFAQ() {
  return (
    <section className="container-balanced grid gap-10 lg:grid-cols-[1fr_1.5fr]">
      <div>
        <p className="eyebrow">A few useful answers</p>
        <h2 className="section-title">Start with the questions that matter.</h2>
      </div>
      <div className="divide-y divide-border border-y border-border">
        <details className="py-5">
          <summary className="cursor-pointer font-semibold">
            Who can work with You &amp; AI?
          </summary>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {business.audience} We discuss the problem, scope, and fit before
            agreeing on an engagement.
          </p>
        </details>
        <details className="py-5">
          <summary className="cursor-pointer font-semibold">
            Can you connect AI to our existing booking or CRM system?
          </summary>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We can assess your tools and available integrations, then design a
            workflow around them. The approach depends on API access, data
            requirements, and the level of human review your process needs.
          </p>
        </details>
        <details className="py-5">
          <summary className="cursor-pointer font-semibold">
            What is AEO, and how does it relate to SEO?
          </summary>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Answer engine optimization helps make business information useful
            for questions asked in AI search experiences. It builds on clear
            content, technical search foundations, and accurate business
            information.{" "}
            <Link href="/services#aeo-examples" className="underline">
              See practical website examples.
            </Link>
          </p>
        </details>
        <details className="py-5">
          <summary className="cursor-pointer font-semibold">
            Is DentalAI part of You &amp; AI?
          </summary>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Yes. DentalAI is an in-house product in development under the same
            brand, alongside our consulting and software services.{" "}
            <Link href="/projects#dentalai" className="underline">
              Learn about DentalAI.
            </Link>
          </p>
        </details>
      </div>
    </section>
  );
}
