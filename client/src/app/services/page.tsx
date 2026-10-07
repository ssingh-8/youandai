import { ServicesOverview } from "@/components/services-overview";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Services",
  "AI consulting, custom software development, and answer engine optimization services built around your business goals.",
  "/services",
);
export default function ServicesPage() {
  return <ServicesOverview />;
}
