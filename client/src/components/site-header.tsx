"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-white/70 backdrop-blur-lg">
      <div className="container-balanced flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary text-lg font-semibold text-white shadow-accent">
            Y
          </span>
          <div className="hidden text-left sm:block">
            <p className="text-base font-semibold text-primary">You &amp; AI</p>
            <p className="text-xs text-slate-500">Strategic AI Consultancy</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact">
            <Button size="sm" className="shadow-accent">
              Book a Strategy Call
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/70 text-primary shadow-sm lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-white/95 lg:hidden">
          <div className="container-balanced flex flex-col gap-4 py-6 text-sm text-slate-600">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium hover:text-primary"
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
