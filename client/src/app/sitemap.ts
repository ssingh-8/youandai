import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { serviceDetails } from "@/content/service-details";
import { guides } from "@/content/guides";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.websiteUrl;
  return base
    ? [
        "/",
        "/services",
        "/projects",
        "/about",
        "/contact",
        "/projects/dentalai",
        "/guides",
        ...serviceDetails.map(({ slug }) => `/services/${slug}`),
        ...guides.map(({ slug }) => `/guides/${slug}`),
      ].map((path) => ({
        url: new URL(path, base).href,
      }))
    : [];
}
