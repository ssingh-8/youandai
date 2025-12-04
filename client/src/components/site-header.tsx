"use client";

import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Expertise" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-lg">
      <div className="container-balanced flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary text-lg font-semibold text-primary-foreground shadow-accent">
            Y
          </span>
          <div className="hidden text-left sm:block">
            <p className="text-base font-semibold text-foreground">You &amp; AI</p>
            <p className="text-xs text-muted-foreground">Strategic AI Consultancy</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
          <Link href="/contact">
            <Button size="sm" className="shadow-accent">
              Book a Strategy Call
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground shadow-sm"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-balanced flex flex-col gap-4 py-6 text-sm text-muted-foreground">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full">Book a Strategy Call</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
