import Link from "next/link";

const primaryLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "#" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className="container-balanced grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-white/80 text-lg font-semibold text-primary shadow-accent">
              Y
            </span>
            <div>
              <p className="text-lg font-semibold">You &amp; AI</p>
              <p className="text-xs text-white/70">Strategic AI Consultancy</p>
            </div>
          </div>
          <p className="text-sm text-white/70">
            Enterprise-grade AI solutions engineered for measurable business outcomes across strategy, implementation, and enablement.
          </p>
          <div className="flex gap-3 text-xs text-white/60">
            <span>ISO 27001</span>
            <span>SOC 2</span>
            <span>NVIDIA Inception</span>
            <span>AWS GenAI</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>hello@youandai.co</li>
            <li>(415) 555-0123</li>
            <li>Global delivery: US · UK · Singapore</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Keep exploring</h4>
          <p className="mt-4 text-sm text-white/70">
            Get insights on AI strategy, governance, and implementation best practices delivered monthly.
          </p>
          <form className="mt-4 flex gap-3">
            <input
              type="email"
              placeholder="Work email"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
            />
            <button className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary shadow-accent">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-balanced flex flex-col gap-4 py-6 text-xs text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <p>© {year} You &amp; AI Consulting. All rights reserved.</p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

