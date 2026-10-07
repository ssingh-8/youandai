import { ArrowUpRight, BrainCircuit, Code2, Search } from "lucide-react";
import Link from "next/link";
import { services } from "@/content/services";
import { business } from "@/lib/business";
const icons = [BrainCircuit, Code2, Search];

export function ValueProposition() {
  return (
    <section id="services" className="container-balanced scroll-mt-28">
      <div className="max-w-2xl">
        <p className="eyebrow">How we can help</p>
        <h2 className="section-title">Three ways to move forward.</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Choose a focused engagement or connect strategy, development, and
          discovery in one project. {business.audience}
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[index];
          return (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <Icon className="h-7 w-7 text-foreground" />
              <h3 className="mt-8 text-xl font-semibold">{service.title}</h3>
              <p className="mb-8 mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold"
              >
                Explore {service.title} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
