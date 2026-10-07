import type { Metadata } from "next";
import { business } from "./business";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = business.websiteUrl
    ? new URL(path, business.websiteUrl).href
    : undefined;
  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: `${title} | ${business.name}`,
      description,
      url,
      type: "website",
      siteName: business.name,
    },
  };
}
