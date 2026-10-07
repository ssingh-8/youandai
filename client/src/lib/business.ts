import details from "@/content/business.json";

export type Project = {
  name: string;
  description: string;
  url: string;
  category: string;
  status: "Live" | "In development" | "Experiment";
};

export function webUrl(value: string): string | undefined {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export const business = {
  ...details,
  websiteUrl: webUrl(details.websiteUrl),
  bookingUrl: webUrl(details.bookingUrl),
  privacyUrl: webUrl(details.privacyUrl),
  termsUrl: webUrl(details.termsUrl),
  projects: details.projects as Project[],
};
export const description =
  "AI consulting, custom software services, and answer engine optimization (AEO). You & AI brings client work and independent projects together under one brand.";
