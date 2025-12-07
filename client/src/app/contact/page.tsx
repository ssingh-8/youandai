import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container-balanced py-20">
      <section className="mx-auto max-w-2xl text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Get in touch
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-foreground">
          Let&apos;s talk about your AI challenge
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          If you need help with inference speed, GPU cost, or integrating AI
          into an existing workflow — that&apos;s our specialty.
        </p>
      </section>

      <div className="mx-auto max-w-xl">
        <ContactForm />
      </div>
    </div>
  );
}
