export type ExperienceEntry = {
  role: string;
  company: string;
  type: string;
  /** Start / end as "YYYY-MM"; no `end` means present. */
  start: string;
  end?: string;
  description: string;
  /** Optional logo path under /public; falls back to the company initials. */
  logo?: string;
  href?: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Frontend Web Developer",
    company: "Kementerian Koperasi Republik Indonesia",
    type: "Contract",
    start: "2022-01",
    description:
      "Responsible for developing a responsive and attractive user interface using React as the main library, with Material-UI as the UI component.",
    logo: "/logos/kemenkop.png",
    href: "https://kop.go.id",
  },
  {
    role: "Frontend Web Developer",
    company: "PT. Karl Wig Abadi",
    type: "Contract",
    start: "2019-08",
    end: "2021-12",
    logo: "/logos/kwa.png",
    description:
      "Developed and maintained various web applications using Laravel (Blade templates only) as the main framework, and designed responsive displays using Bootstrap.",
  },
];
