import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { business, description } from "@/lib/business";
import { StructuredData } from "@/components/structured-data";
import searchVerification from "@/content/search-verification.json";
export const metadata: Metadata = {
  metadataBase: business.websiteUrl ? new URL(business.websiteUrl) : undefined,
  title: {
    default: `${business.name} | AI Consulting, Software & AEO`,
    template: `%s | ${business.name}`,
  },
  description,
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || searchVerification.google,
    other: {
      "msvalidate.01":
        process.env.BING_SITE_VERIFICATION || searchVerification.bing,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": business.websiteUrl
      ? new URL("/#organization", business.websiteUrl).href
      : undefined,
    name: business.name,
    url: business.websiteUrl,
    description,
    ...(business.email ? { email: business.email } : {}),
    ...(business.legalName ? { legalName: business.legalName } : {}),
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-background focus:p-4"
        >
          Skip to content
        </a>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </Providers>
        <StructuredData data={organization} />
      </body>
    </html>
  );
}
