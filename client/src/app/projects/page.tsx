import { ProjectList } from "@/components/projects";
import { pageMetadata } from "@/lib/metadata";
import { business } from "@/lib/business";
export const metadata = pageMetadata(
  "Projects",
  "DentalAI and future products, tools, and experiments from You & AI, together under one brand.",
  "/projects",
);
export default function ProjectsPage() {
  return (
    <div className="container-balanced py-20">
      <p className="eyebrow">The things we build</p>
      <h1 className="page-title">
        Independent ideas.
        <br />A shared home.
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
        Explore the product side of {business.name}: a place for software,
        practical tools, and new ideas alongside our consulting and development
        services. DentalAI is an in-house product in development.
      </p>
      <ProjectList />
    </div>
  );
}
