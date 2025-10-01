import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";

const testimonials = [
  {
    quote:
      "You & AI helped us unlock $28M in new revenue streams by modernizing our supply chain analytics and deploying predictive maintenance models across 60 manufacturing sites.",
    name: "Priya Menon",
    role: "Chief Transformation Officer, Axis Manufacturing",
    metrics: ["6.2x ROI", "12-week pilot", "Global rollout"],
  },
  {
    quote:
      "Their human-centered enablement made AI adoption seamless for our teams — we now ship new customer intelligence models in weeks instead of quarters.",
    name: "Gabriel Alvarez",
    role: "VP Customer Experience, Horizon Financial",
    metrics: ["48% faster insights", "Incremental NPS +17", "Multi-cloud"],
  },
];

export function Testimonials() {
  return (
    <section className="container-balanced py-20">
      <IntersectionAnimation animation="fade-in-up" className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Trusted by global leaders</p>
        <h2 className="mt-3 text-3xl font-semibold text-primary">Real results, validated by our clients</h2>
      </IntersectionAnimation>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimony, index) => (
          <IntersectionAnimation
            key={testimony.name}
            animation="fade-in-up"
            delay={0.1 * index}
            className="h-full"
          >
            <Card className="h-full border-primary/10 bg-white/95">
              <blockquote className="text-base text-slate-700">“{testimony.quote}”</blockquote>
              <div className="mt-6">
                <p className="text-sm font-semibold text-primary">{testimony.name}</p>
                <p className="text-xs text-slate-500">{testimony.role}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-primary/80">
                {testimony.metrics.map((metric) => (
                  <span key={metric} className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1">
                    {metric}
                  </span>
                ))}
              </div>
            </Card>
          </IntersectionAnimation>
        ))}
      </div>
    </section>
  );
}

