import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LiveChatAssistant } from "@/components/live-chat";

export const metadata = {
  title: "You & AI | Strategic AI Consultancy",
  description:
    "We design, build, and deploy AI systems that run fast, reliably, and at scale. Specialized in GPU-accelerated inference and production deployment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <LiveChatAssistant />
        </Providers>
      </body>
    </html>
  );
}
