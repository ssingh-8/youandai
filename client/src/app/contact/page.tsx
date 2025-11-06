import { ContactForm } from "@/components/contact-form";
import { ContactInfoCards } from "@/components/contact-info";

export default function ContactPage() {
  return (
    <div className="container-balanced space-y-16 py-20">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Work with You &amp; AI</p>
        <h1 className="mt-3 text-4xl font-semibold text-primary">Let’s architect your next AI advantage</h1>
        <p className="mt-4 text-sm text-slate-600">
          Tell us about your goals and we’ll schedule a strategic discovery session to explore high-impact AI opportunities tailored to your business.
        </p>
      </section>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.8fr)]">
        <ContactInfoCards />
        <ContactForm />
      </div>
    </div>
  );
}

