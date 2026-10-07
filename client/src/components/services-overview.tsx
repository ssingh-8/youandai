import { services } from "@/content/services";
import { aeoExamples } from "@/content/aeo";
import { business } from "@/lib/business";
import { DualCTASection } from "./cta-section";

export function ServicesOverview() {
  return (
    <div className="space-y-20 pb-24 pt-16">
      <section className="container-balanced">
        <p className="eyebrow">Our services</p>
        <h1 className="page-title">
          A clear plan.
          <br />
          Something useful at the end.
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          AI consulting, software development, and answer engine optimization.
          Each engagement starts with your goals and a scope we agree together.{" "}
          {business.audience}
        </p>
      </section>
      <div className="container-balanced space-y-8">
        {services.map((service) => (
          <section
            id={service.id}
            key={service.id}
            className="scroll-mt-28 rounded-2xl border border-border bg-card p-7 sm:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="eyebrow">
                  {service.number} / {service.promise}
                </p>
                <h2 className="mt-4 text-3xl font-semibold">{service.title}</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">What we can work on</h3>
                <ul className="mt-5 space-y-4">
                  {service.features.map((feature) => (
                    <li
                      className="flex gap-3 text-sm text-muted-foreground"
                      key={feature}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-border pt-5 text-sm leading-relaxed">
                  {service.outcome}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
      <section className="container-balanced grid gap-8 md:grid-cols-2">
        <div>
          <p className="eyebrow">Understanding AEO</p>
          <h2 className="section-title">
            Useful answers start with useful information.
          </h2>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">How does AEO relate to SEO?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              SEO supports discovery in search. AEO also considers how clear,
              accurate content can answer questions in AI-driven search
              experiences. Crawlability, helpful content, and consistent
              business information matter to both.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What can we measure?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We agree a baseline and track relevant signals: indexed pages,
              search traffic, qualified inquiries, and observed mentions across
              a defined set of questions. AI answers vary, so a single
              screenshot is not a reliable measure of success.
            </p>
          </div>
        </div>
      </section>
      <section id="aeo-examples" className="container-balanced scroll-mt-28">
        <p className="eyebrow">AEO in practice</p>
        <h2 className="section-title">
          What AI search optimization looks like on a website.
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          These are practical ways we can improve a business website’s clarity
          and discoverability. They build on sound SEO; no change can guarantee
          that an AI system will cite or recommend a business.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {aeoExamples.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <p className="font-mono text-xs text-muted-foreground">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed">
                {item.example}
              </p>
            </article>
          ))}
        </div>
      </section>
      <DualCTASection />
    </div>
  );
}
