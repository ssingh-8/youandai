import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { serviceDetails } from "@/content/service-details";
import { guides } from "@/content/guides";
import { business } from "@/lib/business";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { DualCTASection } from "@/components/cta-section";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) notFound();
  return pageMetadata(service.title, service.description, `/services/${slug}`);
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) notFound();
  const guide = guides.find((item) => item.slug === service.guide)!;
  return (
    <div className="space-y-16 pb-20 pt-10 sm:space-y-20">
      <section className="container-balanced">
        <Breadcrumbs
          items={[
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${slug}` },
          ]}
        />
        <p className="eyebrow">Strategy, delivery & support</p>
        <h1 className="page-title max-w-3xl">{service.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {service.intro}
        </p>
        <Link href="/contact" className="action-link mt-8">
          Discuss your project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
      <section className="container-balanced grid gap-8 border-t border-border pt-10 md:grid-cols-[1fr_2fr]">
        <h2 className="text-2xl font-semibold">Who this is for</h2>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>{service.audience}</p>
          <p>{business.audience}</p>
        </div>
      </section>
      <section className="container-balanced">
        <p className="eyebrow">A scope we agree together</p>
        <h2 className="section-title">What we can deliver</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {service.deliverables.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-secondary py-12">
        <div className="container-balanced grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">An example of the approach</p>
            <h2 className="section-title">{service.example.title}</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            {service.example.body}
          </p>
        </div>
      </section>
      <section className="container-balanced grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Working together</p>
          <h2 className="section-title">How an engagement starts</h2>
        </div>
        <ol className="space-y-6">
          {service.steps.map((step, index) => (
            <li key={step} className="flex gap-5 leading-relaxed">
              <span className="font-mono text-muted-foreground">
                0{index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>
      <section className="container-balanced grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="eyebrow">Before we start</p>
          <h2 className="section-title">Common questions</h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {service.faqs.map((faq) => (
            <details key={faq.question} className="py-5">
              <summary className="cursor-pointer font-semibold">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
      <aside className="container-balanced grid gap-8 rounded-2xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Read the guide</p>
          <Link
            href={`/guides/${guide.slug}`}
            className="mt-4 block text-xl font-semibold underline decoration-border underline-offset-4"
          >
            {guide.title}
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {guide.description}
          </p>
        </div>
        <div>
          <p className="eyebrow">Related services</p>
          <ul className="mt-4 space-y-4">
            {serviceDetails
              .filter((item) => item.slug !== slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="font-semibold hover:underline"
                  >
                    {item.title} →
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </aside>
      <DualCTASection />
      {business.websiteUrl && (
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": new URL(`/services/${slug}#service`, business.websiteUrl)
              .href,
            name: service.title,
            description: service.intro,
            url: new URL(`/services/${slug}`, business.websiteUrl).href,
            provider: {
              "@id": new URL("/#organization", business.websiteUrl).href,
            },
          }}
        />
      )}
    </div>
  );
}
