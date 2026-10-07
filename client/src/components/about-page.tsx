import { business } from "@/lib/business";
import { DualCTASection } from "./cta-section";
import { skills } from "@/content/skills";
export function AboutPage() {
  const roles = [
    {
      ...business.operator,
      heading: "A consistent point of contact",
      description:
        "Client conversations, project coordination, and day-to-day operations. A clear point of contact from the first conversation through delivery.",
    },
    {
      ...business.technicalLead,
      heading: "From plan to working product",
      description:
        "Technical planning, software development, AI integration, and quality review—organized around the needs of each project.",
    },
  ];
  return (
    <div className="space-y-20 pb-24 pt-16">
      <section className="container-balanced">
        <p className="eyebrow">About {business.name}</p>
        <h1 className="page-title">
          A home for good ideas.
          <br />A partner to build them.
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          {business.name} brings AI consulting, software services, answer engine
          optimization, and independent projects together under one umbrella.
          Our focus is on turning a clear business need into useful,
          maintainable work.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          {business.audience}
        </p>
      </section>
      <section className="container-balanced rounded-2xl border border-border bg-card p-8 sm:p-10">
        <p className="eyebrow">Our founders</p>
        <h2 className="section-title">
          Big-tech experience. Practical application.
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          {business.founderBackground}
        </p>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          {business.companyStage} The experience above comes from our founders’
          prior work; the capabilities below describe what we can bring to your
          project.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          Independent services. No affiliation with or endorsement by Microsoft
          or NVIDIA.
        </p>
        <div className="mt-10 grid gap-7 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.title}>
              <h3 className="font-semibold">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-balanced">
        <p className="eyebrow">How we work</p>
        <h2 className="section-title">
          Personal attention. Clear responsibilities.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          We bring business operations and technical delivery together, so your
          goals, project communication, and the work itself stay connected.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {roles.map((role) => (
            <article
              className="rounded-2xl border border-border bg-card p-8"
              key={role.title}
            >
              <p className="eyebrow">{role.title}</p>
              <h3 className="mt-4 text-2xl font-semibold">{role.heading}</h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {role.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-balanced grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Practical by design",
            text: "Choose tools and approaches that fit the problem, the budget, and the people doing the work.",
          },
          {
            title: "Clear about the work",
            text: "Agree on scope, keep communication straightforward, and make progress visible.",
          },
          {
            title: "Built to keep going",
            text: "Plan for documentation, maintenance, and the next person who needs to work with the result.",
          },
        ].map((item) => (
          <div className="border-t border-border pt-6" key={item.title}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </section>
      <DualCTASection />
    </div>
  );
}
