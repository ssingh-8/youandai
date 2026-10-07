import { ContactForm } from "@/components/contact-form";
import { business } from "@/lib/business";
import { contactConfigured } from "@/lib/contact-api";
import { pageMetadata } from "@/lib/metadata";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata(
  "Contact",
  "Talk with us about AI consulting, software development, AEO, or a project partnership.",
  "/contact",
);
export default function ContactPage() {
  return (
    <div className="container-balanced grid gap-12 py-20 lg:grid-cols-2">
      <section>
        <p className="eyebrow">Start a conversation</p>
        <h1 className="page-title">
          Tell us what
          <br />
          you have in mind.
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
          A business challenge, a product idea, or a question about AI search.
          Share a little context and we can explore the next step together.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          Inquiries start with our operations team, who coordinate the right
          next steps for your project.
        </p>
        {business.responseTime && (
          <p className="mt-5 text-sm">{business.responseTime}</p>
        )}
        {business.email && (
          <a
            className="mt-6 block break-all font-medium"
            href={`mailto:${business.email}`}
          >
            {business.email}
          </a>
        )}
        {business.bookingUrl && (
          <a className="action-link mt-6" href={business.bookingUrl}>
            Schedule a call
          </a>
        )}
      </section>
      <ContactForm available={contactConfigured()} />
    </div>
  );
}
