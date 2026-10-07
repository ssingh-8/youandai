"use client";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";
import { business } from "@/lib/business";
const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
      <div className="container-balanced flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          aria-label={`${business.name} home`}
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground text-lg font-semibold text-background"
          >
            Y<span className="text-accent">.</span>
          </span>
          <div>
            <p className="font-semibold">{business.name}</p>
            <p className="hidden text-[11px] text-muted-foreground sm:block">
              {business.tagline}
            </p>
          </div>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm lg:flex"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border"
            aria-label="Toggle color theme"
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="hidden h-4 w-4 dark:block" />
          </button>
          <Link
            href="/contact"
            className="action-link hidden text-xs lg:inline-flex"
          >
            Let’s talk
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border lg:hidden"
        >
          <div className="container-balanced flex flex-col gap-5 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
