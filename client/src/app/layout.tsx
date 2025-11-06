import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LiveChatAssistant } from "@/components/live-chat";

export const metadata = {
  title: "You & AI | Strategic AI Consultancy",
  description:
    "You & AI delivers enterprise-grade AI strategy, implementation, and enablement to accelerate measurable business growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-muted text-primary antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 bg-gradient-subtle pb-24">{children}</main>
            <SiteFooter />
          </div>
          <LiveChatAssistant />
        </Providers>
      </body>
    </html>
  );
}
