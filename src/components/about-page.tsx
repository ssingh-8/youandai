import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";
import { ShieldCheck, Cloud, Cpu, Users } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Security-first",
    description:
      "ISO 27001 and SOC 2 certified workflows with continuous compliance monitoring across all AI deployments.",
  },
  {
    icon: Cpu,
    title: "GPU-accelerated",
    description:
      "NVIDIA Inception partners leveraging cutting-edge compute for both predictive modeling and generative AI workloads.",
  },
  {
    icon: Cloud,
    title: "Multi-cloud expertise",
    description:
      "Certified architects across AWS, Azure, and Google Cloud ensuring seamless integration with your existing infrastructure.",
  },
  {
    icon: Users,
    title: "Human-centered change",
    description:
      "Training programs and playbooks that empower teams to adopt AI responsibly and sustainably.",
  },
];

const certifications = [
  "ISO 27001",
  "SOC 2 Type II",
  "NVIDIA Inception Partner",
  "AWS Generative AI Competency",
  "Azure AI Engineering",
];

export function AboutPage() {
  return (
    <div className="space-y-20 bg-white pb-24 pt-16">
      <section className="container-balanced space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Who we are</p>
        <h1 className="text-4xl font-semibold text-primary">Deep AI expertise with real-world business fluency</h1>
        <p className="mx-auto max-w-3xl text-sm text-slate-600">
          You &amp; AI is a team of senior AI architects, engineers, and strategists with over 15 years of experience designing, implementing, and scaling AI solutions across regulated industries.
        </p>
      </section>

      <section className="container-balanced grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
        <IntersectionAnimation animation="fade-in-up" className="glass-panel">
          <h2 className="text-2xl font-semibold text-primary">Our mission</h2>
          <p className="mt-4 text-sm text-slate-600">
            We exist to help companies harness AI responsibly to create meaningful value — for customers, employees, and shareholders. Our engagements balance innovation with governance, so teams can deploy AI with confidence.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            From predictive analytics to generative AI co-pilots, we bring a proven playbook for delivering measurable outcomes while elevating the capabilities of internal teams.
          </p>
        </IntersectionAnimation>

        <IntersectionAnimation animation="fade-in-up" delay={0.15} className="grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title} className="border-primary/10 bg-white/95">
              <value.icon className="h-9 w-9 text-accent" />
              <h3 className="mt-3 text-lg font-semibold text-primary">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </Card>
          ))}
        </IntersectionAnimation>
      </section>

      <section className="container-balanced rounded-3xl border border-primary/10 bg-accent-soft/80 p-10 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Certifications &amp; alliances</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-primary/80">
          {certifications.map((cert) => (
            <span key={cert} className="rounded-full border border-primary/20 px-4 py-2">
              {cert}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

