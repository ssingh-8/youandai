import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.websiteUrl;
  return base
    ? ["/", "/services", "/projects", "/about", "/contact"].map((path) => ({
        url: new URL(path, base).href,
      }))
    : [];
}
