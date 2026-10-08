import Link from "next/link";
import { business } from "@/lib/business";
import { StructuredData } from "./structured-data";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const trail = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mb-8 text-sm text-muted-foreground"
      >
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {trail.map((item, index) => (
            <li key={item.href} className="flex items-center gap-3">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === trail.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {business.websiteUrl && (
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: trail.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: new URL(item.href, business.websiteUrl).href,
            })),
          }}
        />
      )}
    </>
  );
}
