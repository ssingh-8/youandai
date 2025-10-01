import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { IntersectionAnimation } from "./animations";
import { Brain, Workflow, GraduationCap } from "lucide-react";

const services = [
  {
    title: "AI Strategy Consulting",
    icon: Brain,
    description:
      "Align the executive agenda with AI investments, quantify business impact, and blueprint governance across data, models, and change management.",
    features: [
      "Executive alignment workshops",
      "Data, people, and process readiness assessment",
      "Long-range AI roadmap and operating model",
    ],
    timeline: "4-6 weeks",
    investment: "Starting at $85K",
  },
  {
    title: "Custom AI Implementation",
    icon: Workflow,
    description:
      "Design, build, and deploy production-grade AI solutions that integrate with your existing cloud environments and enterprise data stacks.",
    features: [
      "Solution architecture & model engineering",
      "Secure data pipelines & MLOps",
      "Pilot deployment and production rollout",
    ],
    timeline: "8-16 weeks",
    investment: "Starting at $180K",
  },
  {
    title: "AI Skills Training",
    icon: GraduationCap,
    description:
      "Upskill leaders, product teams, and frontline operators with role-based enablement programs covering GenAI, governance, and responsible adoption.",
    features: [
      "Role-based AI academies",
      "Hands-on labs and playbooks",
      "Change management and adoption kits",
    ],
    timeline: "2-8 weeks",
    investment: "Starting at $45K",
  },
];

export function ServicesOverview() {
  return (
    <div className="space-y-16 bg-white pb-24 pt-16">
      <section className="container-balanced space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">What we deliver</p>
        <h1 className="text-4xl font-semibold text-primary">Services engineered for measurable AI outcomes</h1>
        <p className="mx-auto max-w-3xl text-sm text-slate-600">
          Choose the engagement model that best fits your organization’s maturity. Each offering combines strategic oversight with hands-on acceleration to ship production-ready capabilities.
        </p>
      </section>

      <div className="container-balanced grid gap-8 lg:grid-cols-3">
        {services.map((service, index) => (
          <IntersectionAnimation key={service.title} animation="fade-in-up" delay={0.15 * index}>
            <Card className="h-full border-primary/10 bg-white/95">
              <service.icon className="h-10 w-10 text-accent" />
              <h2 className="mt-4 text-xl font-semibold text-primary">{service.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {service.features.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-primary/60">
                <span>{service.timeline}</span>
                <span>{service.investment}</span>
              </div>
              <Button className="mt-6 w-full">Book a Free Strategy Call</Button>
            </Card>
          </IntersectionAnimation>
        ))}
      </div>

      <section className="container-balanced grid gap-8 rounded-3xl border border-primary/10 bg-accent-soft/80 p-10 shadow-card lg:grid-cols-3">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">How we work</p>
          <h2 className="text-2xl font-semibold text-primary">
            Cross-functional squads with embedded governance
          </h2>
        </div>
        <div className="space-y-3 text-sm text-primary/80">
          <p>Dedicated architects, ML engineers, data scientists, and change leaders aligned to your roadmap.</p>
          <p>Secure delivery models across AWS, Azure, and Google Cloud with GPU-accelerated environments.</p>
        </div>
        <div className="space-y-3 text-sm text-primary/80">
          <p>Transparent operating rhythm with weekly milestones, KPI dashboards, and optimization sprints.</p>
          <Button variant="outline" className="border-primary/20 text-primary">
            Download Engagement Playbook
          </Button>
        </div>
      </section>
    </div>
  );
}

