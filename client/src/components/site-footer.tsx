import Link from "next/link";
import { business } from "@/lib/business";
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-balanced grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="text-xl font-semibold">{business.name}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {business.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Practical technology services and independent projects. One place to
            connect, create, and build what comes next.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Let’s connect</h2>
          <div className="mt-5 space-y-3 text-sm text-muted-foreground">
            <Link href="/contact" className="block">
              Start a conversation
            </Link>
            {business.email && (
              <a className="block break-all" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            )}
            {business.bookingUrl && (
              <a className="block" href={business.bookingUrl}>
                Schedule a call
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-balanced flex flex-wrap justify-between gap-4 py-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {business.legalName || business.name}.
            All rights reserved.
          </p>
          <div className="flex gap-4">
            {business.privacyUrl && <a href={business.privacyUrl}>Privacy</a>}
            {business.termsUrl && <a href={business.termsUrl}>Terms</a>}
          </div>
        </div>
      </div>
    </footer>
  );
}
