import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/content/services";
import { business } from "@/lib/business";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-midnight py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-40 h-[550px] w-[550px] rounded-full border border-white/10 shadow-[0_0_0_80px_rgba(255,255,255,0.025),0_0_0_160px_rgba(255,255,255,0.02)]"
      />
      <div className="container-balanced relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            One studio. Room for possibility.
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Ideas into
            <br />
            software.
            <br />
            <span className="text-teal-300">Ambition into action.</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-300">
            {business.name} brings AI consulting, software services, and AI
            search visibility together. A partner for your next challenge. A
            home for what we build.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="action-link">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 text-sm text-white hover:text-teal-300"
            >
              Explore our services <ArrowDown className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="border-t border-white/20">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group flex gap-5 border-b border-white/20 py-7"
            >
              <span className="pt-1 font-mono text-xs text-teal-300">
                {service.number}
              </span>
              <div className="flex-1">
                <p className="text-xs text-slate-400">{service.title}</p>
                <h2 className="mt-2 text-2xl font-medium group-hover:text-teal-300">
                  {service.promise}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {service.summary}
                </p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 text-slate-400 group-hover:text-teal-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
