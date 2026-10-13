import ListSection from "./list-section";

const projects = [
  { title: "ODS Mandiri", description: "Official Cooperative Data • Present", href: "https://ods.kop.go.id/", image: "/projects/ods-mandiri.jpg", accent: ["#0891b2", "#083344"] as [string, string], stack: ["react", "mui"] as const },
  { title: "PT Wiratman", description: "Architecture & engineering • 2025", href: "https://www.wiratman.co.id/", image: "/projects/wiratman.jpg", accent: ["#6b3a66", "#1f0f1d"] as [string, string], stack: ["nextjs", "tailwind"] as const },
  { title: "PT Ketira Engineering Consultants", description: "Engineering consultancy • 2024", href: "https://ketira.com/", image: "/projects/ketira.jpg", accent: ["#a3e635", "#3f6212"] as [string, string], stack: ["wordpress"] as const },
  { title: "i-Vigilant", description: "Company website • 2024", href: "https://www.i-vigilant.com/", image: "/projects/i-vigilant.jpg", accent: ["#e11d48", "#7f1d1d"] as [string, string], stack: ["react", "mui"] as const },
  { title: "Lamikro", description: "Micro business accounting • 2019", href: "https://lamikro.com/", image: "/projects/lamikro.jpg", accent: ["#dc3545", "#450a0a"] as [string, string], stack: ["jquery", "bootstrap"] as const },
];

export default function Projects() {
  return <ListSection id="projects" title="Selected Works" items={projects} />;
}
