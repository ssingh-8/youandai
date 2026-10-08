import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { guides } from "@/content/guides";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "AI, Software & AEO Guides",
  "Practical guides for service businesses choosing AI integrations, custom software, and search visibility improvements.",
  "/guides",
);
export default function GuidesPage() {
  return (
    <div className="container-balanced py-16 sm:py-20">
      <p className="eyebrow">Practical decisions</p>
      <h1 className="page-title max-w-3xl">
        Guides to AI, software, and search visibility
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
        Start with the problem you are trying to solve. These guides explain
        useful questions to ask, tradeoffs to consider, and what to check before
        committing to a project.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {guides.map((guide) => (
          <article
            key={guide.slug}
            className="flex flex-col rounded-2xl border border-border bg-card p-7"
          >
            <h2 className="text-2xl font-semibold">
              <Link href={`/guides/${guide.slug}`} className="hover:underline">
                {guide.title}
              </Link>
            </h2>
            <p className="mb-7 mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
              {guide.description}
            </p>
            <Link
              href={`/guides/${guide.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold"
            >
              Read the guide <ArrowUpRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
