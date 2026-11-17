import {
  siBootstrap,
  siChakraui,
  siClaude,
  siDocker,
  siGit,
  siGithub,
  siJavascript,
  siJquery,
  siMui,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siTypescript,
  siZedindustries,
} from "simple-icons";

export type Tech = { name: string; path: string; color?: string; /** Raster logo under /public, used instead of `path`. */ image?: string };

const brand = (icon: { path: string; hex: string }, name: string): Tech => ({
  name,
  path: icon.path,
  color: `#${icon.hex}`,
});

export const TECH = {
  javascript: brand(siJavascript, "JavaScript"),
  typescript: brand(siTypescript, "TypeScript"),
  react: brand(siReact, "React"),
  // Near-black brand colors fall back to currentColor so they stay visible in dark mode.
  nextjs: { name: "Next.js", path: siNextdotjs.path },
  mui: brand(siMui, "Material UI"),
  chakra: brand(siChakraui, "Chakra UI"),
  tailwind: brand(siTailwindcss, "Tailwind CSS"),
  jquery: brand(siJquery, "jQuery"),
  bootstrap: brand(siBootstrap, "Bootstrap"),
  git: brand(siGit, "Git"),
  github: { name: "GitHub", path: siGithub.path },
  docker: brand(siDocker, "Docker"),
  // simple-icons has no Apidog mark, so the official favicon is used.
  apidog: { name: "Apidog", path: "", image: "/logos/apidog.png" },
  dbeaver: { name: "DBeaver", path: "", image: "/logos/dbeaver.png" },
  // Zed's mark is monochrome: currentColor keeps it black in light mode and white in dark mode.
  zed: { name: "Zed", path: siZedindustries.path },
  claudecode: brand(siClaude, "Claude Code"),
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof TECH;
