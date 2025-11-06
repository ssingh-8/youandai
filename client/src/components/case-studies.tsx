import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";

const studies = [
  {
    industry: "Manufacturing",
    company: "Axis Manufacturing",
    challenge: "Global supply chain volatility and unplanned downtime across 60 facilities",
    solution: "Predictive maintenance and dynamic inventory optimization using multi-cloud data platforms",
    results: ["6.2x ROI", "$28M incremental revenue", "Downtime reduced 37%"],
    testimonial: "You & AI gave us an enterprise blueprint and execution muscle that our teams could scale confidently.",
  },
  {
    industry: "Financial Services",
    company: "Horizon Financial",
    challenge: "Fragmented customer intelligence and slow personalization rollouts",
    solution: "Unified customer AI hub combining predictive models with GenAI for advisor workflows",
    results: ["48% faster insights", "NPS +17", "Regulatory compliance maintained"],
    testimonial: "Their governance-first methodology let us deploy responsibly while accelerating innovation."
  },
  {
    industry: "Healthcare",
    company: "Nova Health",
    challenge: "High patient wait times and inefficiencies in care coordination",
    solution: "AI-driven triage, staffing optimization, and clinical note automation with strict PHI guardrails",
    results: ["Wait times reduced 32%", "Clinician productivity +21%", "HIPAA-compliant deployment"],
    testimonial: "The team balanced empathy, speed, and security — our clinicians immediately saw value."
  },
];

export function CaseStudies() {
  return (
    <div className="space-y-16 bg-white pb-24 pt-16">
      <section className="container-balanced space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Proven outcomes</p>
        <h1 className="text-4xl font-semibold text-primary">Industry-specific transformations with measurable KPIs</h1>
        <p className="mx-auto max-w-3xl text-sm text-slate-600">
          Explore how You &amp; AI partners with enterprises to unlock revenue, streamline operations, and enable teams with secure AI deployments.
        </p>
      </section>

      <div className="container-balanced space-y-8">
        {studies.map((study, index) => (
          <IntersectionAnimation key={study.company} animation="fade-in-up" delay={0.15 * index}>
            <Card className="border-primary/10 bg-white/95 p-8 shadow-card">
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{study.industry}</p>
                  <h2 className="text-2xl font-semibold text-primary">{study.company}</h2>
                  <p className="text-sm text-slate-600">Challenge: {study.challenge}</p>
                  <p className="text-sm text-slate-600">Solution: {study.solution}</p>
                </div>
                <div className="space-y-3 text-sm text-primary/80">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/60">Impact</p>
                  <ul className="space-y-2">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="rounded-2xl border border-primary/10 bg-primary/5 p-4 text-primary/80">
                    “{study.testimonial}”
                  </blockquote>
                </div>
              </div>
            </Card>
          </IntersectionAnimation>
        ))}
      </div>
    </div>
  );
}

