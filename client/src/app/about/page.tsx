import { AboutPage } from "@/components/about-page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "One home for AI consulting, software services, AEO, and independent projects, with connected operations and technical delivery.",
  "/about",
);
export default function About() {
  return <AboutPage />;
}
