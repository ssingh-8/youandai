import Link from "next/link";

const primaryLinks = [
  { label: "Services", href: "/services" },
  { label: "Expertise", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-balanced grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary text-lg font-semibold text-primary-foreground shadow-accent">
              Y
            </span>
            <div>
              <p className="text-lg font-semibold text-foreground">You &amp; AI</p>
              <p className="text-xs text-muted-foreground">Strategic AI Consultancy</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            We design, build, and deploy AI systems that run fast, reliably, and at scale. Specialized in GPU-accelerated inference, model optimization, and production deployment.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@youandai.co</li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            If you need AI that works under real constraints — speed, memory, cost, reliability — let&apos;s talk.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-balanced flex flex-col gap-4 py-6 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <p>© {year} You &amp; AI. All rights reserved.</p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
