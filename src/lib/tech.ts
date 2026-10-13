import {
  siBootstrap,
  siChakraui,
  siClaudecode,
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
  siWordpress,
} from "simple-icons";

export type Tech = { name: string; path: string; color?: string };

// simple-icons has no Antigravity mark, so this is a generic arch glyph, not the official logo.
const ANTIGRAVITY_PATH = "M12 2C7 2 3.5 7 2 20h4.2c.6-4 2.5-8 5.8-8s5.2 4 5.8 8H22C20.5 7 17 2 12 2Z";

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
  wordpress: brand(siWordpress, "WordPress"),
  jquery: brand(siJquery, "jQuery"),
  bootstrap: brand(siBootstrap, "Bootstrap"),
  git: brand(siGit, "Git"),
  github: { name: "GitHub", path: siGithub.path },
  docker: brand(siDocker, "Docker"),
  antigravity: { name: "Antigravity IDE", path: ANTIGRAVITY_PATH, color: "#4285F4" },
  claudecode: brand(siClaudecode, "Claude Code"),
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof TECH;
