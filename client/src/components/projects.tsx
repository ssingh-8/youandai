import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { business, webUrl } from "@/lib/business";

export function ProjectList() {
  if (!business.projects.length)
    return (
      <div className="mt-10 rounded-2xl border border-border bg-card p-8 sm:p-12">
        <p className="text-xl font-medium">A home for the things we build.</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          This is where we share public products, tools, and experiments from{" "}
          {business.name}. Have an idea for a collaboration? We would love to
          hear it.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
        >
          Discuss a project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    );
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {business.projects.map((project) => (
        <article
          key={project.name}
          id={project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <p className="eyebrow">
            {project.category} / {project.status}
          </p>
          <h2 className="mt-4 text-2xl font-semibold">{project.name}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          {webUrl(project.url) ? (
            <a
              href={webUrl(project.url)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Explore {project.name} <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Ask about {project.name} <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
export function ProjectsPreview() {
  return (
    <section className="border-y border-border bg-secondary py-16">
      <div className="container-balanced">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Products & experiments</p>
            <h2 className="section-title">One brand. Many possibilities.</h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold"
          >
            Our projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          Client services and independent projects share a home at{" "}
          {business.name}. Each product can have its own focus, with one place
          to discover the work and connect with us. DentalAI is our first
          featured product in development.
        </p>
        <ProjectList />
      </div>
    </section>
  );
}
