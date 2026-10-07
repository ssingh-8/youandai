import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function DualCTASection() {
  return (
    <section className="container-balanced rounded-3xl border border-border bg-accent-soft p-8 sm:p-12">
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="eyebrow">Let’s make a start</p>
          <h2 className="mt-3 text-3xl font-semibold">
            What would you like to build?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A new product, a better workflow, or a clearer presence in AI
            search. Tell us where you want to go.
          </p>
        </div>
        <Link href="/contact" className="action-link shrink-0">
          Start a conversation <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
