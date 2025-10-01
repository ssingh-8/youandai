import Image from "next/image";
import { Button } from "./ui/button";
import { IntersectionAnimation } from "./animations";
import { ArrowRight, Brain, Target, Zap, CheckCircle, TrendingUp, Timer, Users, ShieldCheck } from "lucide-react";

const heroStats = [
  { label: "Average ROI", value: "6.4x" },
  { label: "Deployment", value: "12 weeks" },
  { label: "Enablement", value: "15+ yrs" },
];

const heroFeatures = [
  {
    icon: Brain,
    title: "AI Strategy",
    description: "Executive alignment with measurable AI roadmaps tailored to your industry.",
  },
  {
    icon: Target,
    title: "Implementation",
    description: "Secure multi-cloud delivery squads that launch production-ready AI in weeks.",
  },
  {
    icon: Zap,
    title: "ROI Velocity",
    description: "Accelerators that unlock tangible business impact inside the first 90 days.",
  },
];

const floatingIcons = [
  { icon: TrendingUp, style: { top: "18%", left: "12%" }, translate: "-translate-x-1/2 -translate-y-1/2" },
  { icon: Timer, style: { bottom: "18%", left: "20%" }, translate: "-translate-x-1/2 translate-y-1/2" },
  { icon: ShieldCheck, style: { top: "30%", right: "15%" }, translate: "translate-x-1/2 -translate-y-1/2" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-24 pt-28 text-white">
      <Image
        src="/hero-ai-consulting.jpg"
        alt="AI consulting team collaborating"
        fill
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />

      {floatingIcons.map(({ icon: Icon, style, translate }) => (
        <Icon
          key={`${style.top ?? style.bottom}-${style.left ?? style.right}`}
          className={`absolute hidden h-10 w-10 text-accent/80 drop-shadow-hero sm:block transform ${translate}`}
          style={style}
        />
      ))}

      <div className="relative container-balanced grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <IntersectionAnimation animation="fade-in-up" className="space-y-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[0.75rem] uppercase tracking-[0.2em] text-white/80">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15">
              <Zap className="h-4 w-4 text-accent" />
            </div>
            GPU-Accelerated · Multi-Cloud · Secure by Design
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.4rem]">
              AI Solutions That Drive
              <span className="block text-accent">Real Business Growth</span>
            </h1>
            <p className="max-w-2xl text-lg text-white/80">
              You &amp; AI architects end-to-end AI programs that increase revenue, optimize operations, and uplevel teams with measurable outcomes every quarter.</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <Button size="lg" className="w-full md:w-auto">
              Book a Free Strategy Call
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full border-white/40 text-white md:w-auto">
              Download Free AI Readiness Guide
            </Button>
          </div>
          <dl className="grid gap-6 text-sm text-white/70 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <dt>{stat.label}</dt>
                <dd className="text-3xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </IntersectionAnimation>

        <IntersectionAnimation animation="fade-in-up" delay={0.15} className="glass-panel relative">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">
                Proven playbook
              </p>
              <h2 className="text-2xl font-semibold text-primary">Launch with confidence</h2>
              <p className="text-sm text-slate-600">
                Strategy, delivery, and enablement squads aligned to help you ship production-ready AI that accelerates measurable business outcomes.
              </p>
            </div>

            <div className="space-y-5">
              {heroFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4 rounded-2xl border border-primary/10 bg-white/90 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-primary">{feature.title}</p>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <LeadMagnetForm />
          </div>
        </IntersectionAnimation>
      </div>
    </section>
  );
}

function LeadMagnetForm() {
  return (
    <form className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">First name</label>
          <input
            type="text"
            placeholder="Jordan"
            className="w-full rounded-2xl border border-primary/10 bg-white/90 px-4 py-3 text-sm text-primary shadow-sm focus:border-accent focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Work email</label>
          <input
            type="email"
            placeholder="jordan@company.com"
            className="w-full rounded-2xl border border-primary/10 bg-white/90 px-4 py-3 text-sm text-primary shadow-sm focus:border-accent focus:outline-none"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Company</label>
        <input
          type="text"
          placeholder="Acme Corp"
          className="w-full rounded-2xl border border-primary/10 bg-white/90 px-4 py-3 text-sm text-primary shadow-sm focus:border-accent focus:outline-none"
        />
      </div>
      <Button type="submit" className="w-full" variant="secondary">
        Download the guide
      </Button>
      <p className="text-xs text-slate-500">
        Comprehensive 20-page playbook covering AI strategy, infrastructure, and change management best practices.
      </p>
    </form>
  );
}

