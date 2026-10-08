import Link from "next/link";
import { business } from "@/lib/business";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/breadcrumbs";
export const metadata = pageMetadata(
  "DentalAI — Product in Development",
  "DentalAI is an in-house You & AI product exploring AI-assisted documentation and everyday workflows for dental practices. Learn about its current focus.",
  "/projects/dentalai",
);
export default function DentalAIPage() {
  return (
    <div className="container-balanced py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { name: "Projects", href: "/projects" },
          { name: "DentalAI", href: "/projects/dentalai" },
        ]}
      />
      <div className="max-w-3xl">
        <p className="eyebrow">Our own products · In development</p>
        <h1 className="page-title">
          DentalAI: exploring better dental workflows
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          DentalAI is an in-house product from {business.name}, exploring
          AI-assisted documentation and day-to-day workflows for dental
          practices. Clinical drafts are intended for review by a clinician.
        </p>
        <Link href="/contact" className="action-link mt-8">
          Ask about DentalAI
        </Link>
        <section className="mt-12 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">
            The problem we are exploring
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Documentation and administrative handoffs take time. We are
            exploring how software and AI can help organize that work while
            keeping people responsible for reviewing clinical information.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Current stage</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            DentalAI is in development. This page describes the direction of the
            product; it is not a customer case study or an announcement of
            general availability. There is no public launch date, pricing, or
            self-service signup to share yet.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Help shape the workflow</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            If you work with a dental practice, we would like to understand
            which documentation or administrative tasks need attention. You can
            describe a workflow through our contact form without including
            patient information or clinical records.
          </p>
        </section>
        <section className="mt-10 rounded-2xl border border-border bg-card p-7">
          <h2 className="text-2xl font-semibold">Part of You &amp; AI</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our independent products share a home with our consulting and
            software services. The founders’ prior work at major technology
            companies is career background, separate from this venture’s client
            work.
          </p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
            <Link
              href="/services/ai-consulting"
              className="underline underline-offset-4"
            >
              AI consulting
            </Link>
            <Link
              href="/services/software-development"
              className="underline underline-offset-4"
            >
              Software development
            </Link>
            <Link href="/about" className="underline underline-offset-4">
              About the company
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
