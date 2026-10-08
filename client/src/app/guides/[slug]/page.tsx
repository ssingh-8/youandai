import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/content/guides";
import { serviceDetails } from "@/content/service-details";
import { business } from "@/lib/business";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();
  return pageMetadata(
    guide.title,
    guide.description,
    `/guides/${slug}`,
    "article",
  );
}
export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();
  const service = serviceDetails.find((item) => item.slug === guide.service)!;
  return (
    <div className="container-balanced py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { name: "Guides", href: "/guides" },
          { name: guide.title, href: `/guides/${slug}` },
        ]}
      />
      <article className="mx-auto max-w-3xl">
        <p className="eyebrow">A practical guide · By {business.name}</p>
        <h1 className="page-title">{guide.title}</h1>
        <p className="mt-8 rounded-2xl border border-border bg-secondary p-6 text-lg leading-relaxed">
          {guide.answer}
        </p>
        <div className="mt-12 space-y-10">
          {guide.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
        {guide.sources.length > 0 && (
          <section className="mt-10 border-t border-border pt-8">
            <h2 className="text-xl font-semibold">Sources & further reading</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {guide.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} className="underline underline-offset-4">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
        <aside className="mt-12 rounded-2xl border border-border bg-card p-7">
          <h2 className="text-2xl font-semibold">
            Put the next step in context
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We can assess your situation and agree on a focused scope. Explore
            our service or tell us about the problem you want to solve.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Link
              href={`/services/${service.slug}`}
              className="font-semibold underline underline-offset-4"
            >
              {service.title}
            </Link>
            <Link href="/contact" className="action-link">
              Discuss your project
            </Link>
          </div>
        </aside>
        <nav aria-label="Related guides" className="mt-10">
          <h2 className="text-xl font-semibold">Keep exploring</h2>
          <ul className="mt-4 space-y-3">
            {guides
              .filter((item) => item.slug !== slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/guides/${item.slug}`}
                    className="text-sm underline underline-offset-4"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </article>
      {business.websiteUrl && (
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.description,
            mainEntityOfPage: new URL(`/guides/${slug}`, business.websiteUrl)
              .href,
            author: {
              "@id": new URL("/#organization", business.websiteUrl).href,
            },
            publisher: {
              "@id": new URL("/#organization", business.websiteUrl).href,
            },
          }}
        />
      )}
    </div>
  );
}
