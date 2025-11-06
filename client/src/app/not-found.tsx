import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Error 404</p>
      <h1 className="mt-3 text-4xl font-semibold text-primary">We couldn’t find that page</h1>
      <p className="mt-3 max-w-xl text-sm text-slate-600">
        Let’s get you back to content designed to help you evaluate and scale AI across your organization.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/">
          <Button>Return home</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" className="border-primary/20 text-primary">
            Contact our team
          </Button>
        </Link>
      </div>
    </div>
  );
}

