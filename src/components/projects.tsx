import { PROJECTS } from "@/data/projects";
import { useT } from "@/lib/i18n";
import { Briefcase } from "reicon-react";
import ListSection from "./list-section";

export default function Projects() {
  const t = useT();
  return (
    <ListSection
      id="works"
      icon={<Briefcase width={28} height={28} />}
      title={t.projects.title}
      items={PROJECTS.map((p) => ({
        title: p.title,
        description: p.summary,
        year: p.year,
        href: p.href,
        image: p.image,
        accent: p.accent,
        stack: p.stack,
      }))}
    />
  );
}
