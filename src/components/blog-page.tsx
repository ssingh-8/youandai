import Link from "next/link";
import { Card } from "./ui/card";
import { IntersectionAnimation } from "./animations";
import { Button } from "./ui/button";
import { LeadMagnetDialogTrigger } from "./lead-magnet";

const featuredPost = {
  title: "Operationalizing Generative AI with Guardrails",
  excerpt:
    "How leading enterprises deploy GenAI responsibly by balancing productivity, human-in-the-loop workflows, and compliance.",
  date: "Jan 2025",
  readTime: "8 min read",
};

const posts = [
  {
    title: "Building AI Platforms on Multi-Cloud Infrastructure",
    excerpt: "Architectural considerations for balancing cost, performance, and data gravity across AWS, Azure, and GCP.",
    date: "Dec 2024",
    readTime: "6 min",
  },
  {
    title: "Measuring ROI Across AI Programs",
    excerpt: "A practical framework for calculating and communicating AI business impact to stakeholders.",
    date: "Nov 2024",
    readTime: "5 min",
  },
  {
    title: "Skilling Talent for AI Operations",
    excerpt: "Key competencies for product, engineering, and operations teams to maintain AI in production.",
    date: "Oct 2024",
    readTime: "7 min",
  },
];

export function BlogPage() {
  return (
    <div className="space-y-16 bg-white pb-24 pt-16">
      <section className="container-balanced space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Insights</p>
        <h1 className="text-4xl font-semibold text-primary">Strategic guidance on enterprise AI</h1>
        <p className="mx-auto max-w-3xl text-sm text-slate-600">
          Thought leadership from You &amp; AI consultants on architecting high-performing, responsible AI programs.
        </p>
      </section>

      <section className="container-balanced grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <IntersectionAnimation animation="fade-in-up" className="glass-panel">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/60">Featured</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary">{featuredPost.title}</h2>
          <p className="mt-3 text-sm text-slate-600">{featuredPost.excerpt}</p>
          <div className="mt-4 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-primary/60">
            <span>{featuredPost.date}</span>
            <span>{featuredPost.readTime}</span>
          </div>
          <Link href="#" className="mt-6 inline-block text-sm font-semibold text-accent">
            Read the article →
          </Link>
        </IntersectionAnimation>

        <IntersectionAnimation animation="fade-in-up" delay={0.15} className="rounded-3xl border border-primary/10 bg-accent-soft/80 p-8">
          <h3 className="text-lg font-semibold text-primary">Stay ahead of the curve</h3>
          <p className="mt-2 text-sm text-primary/80">
            Subscribe to our monthly newsletter to receive AI strategy insights, case studies, and event invitations.
          </p>
          <LeadMagnetDialogTrigger>
            <Button className="mt-6 w-full">Download Free AI Readiness Guide</Button>
          </LeadMagnetDialogTrigger>
        </IntersectionAnimation>
      </section>

      <section className="container-balanced grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <IntersectionAnimation key={post.title} animation="fade-in-up" delay={0.1 * index}>
            <Card className="border-primary/10 bg-white/95 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-primary/60">{post.date}</p>
              <h3 className="mt-3 text-lg font-semibold text-primary">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-primary/60">
                <span>{post.readTime}</span>
                <Link href="#" className="font-semibold text-accent">
                  Read →
                </Link>
              </div>
            </Card>
          </IntersectionAnimation>
        ))}
      </section>
    </div>
  );
}

