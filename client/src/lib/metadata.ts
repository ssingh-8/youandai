import type { Metadata } from "next";
import { business } from "./business";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  type: "website" | "article" = "website",
): Metadata {
  const url = business.websiteUrl
    ? new URL(path, business.websiteUrl).href
    : undefined;
  return {
    title: { absolute: `${title} | ${business.name}` },
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: `${title} | ${business.name}`,
      description,
      url,
      type,
      siteName: business.name,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${business.name} — AI consulting, software & AEO`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${business.name}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
