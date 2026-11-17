import type { TechKey } from "@/lib/tech";

export type Project = {
  title: string;
  /** Short one-line description shown on cards. */
  summary: string;
  year: string;
  /** Live website. */
  href: string;
  image: string;
  accent: [string, string];
  stack: readonly TechKey[];
};

export const PROJECTS: Project[] = [
  {
    title: "ODS Mandiri",
    summary: "Cooperative data platform of the Ministry of Cooperatives.",
    year: "Present",
    href: "https://ods.kop.go.id/",
    image: "/projects/ods-mandiri.jpg",
    accent: ["#0891b2", "#083344"],
    stack: ["react", "mui"],
  },
  {
    title: "PT Wiratman",
    summary: "Company website for an architecture and engineering firm.",
    year: "2025",
    href: "https://www.wiratman.co.id/",
    image: "/projects/wiratman.jpg",
    accent: ["#6b3a66", "#1f0f1d"],
    stack: ["nextjs", "tailwind"],
  },
  {
    title: "Lamikro",
    summary: "Simple accounting app for micro businesses.",
    year: "2019",
    href: "https://lamikro.com/",
    image: "/projects/lamikro.jpg",
    accent: ["#dc3545", "#450a0a"],
    stack: ["jquery", "bootstrap"],
  },
];
