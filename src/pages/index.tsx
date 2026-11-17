import About from "@/components/about";
import Experience from "@/components/experience";
import { Contact } from "@/components/contact";
import Preview from "@/components/preview";
import Projects from "@/components/projects";
import Seo from "@/components/seo";
import TechStack from "@/components/tech-stack";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack gap={4}>
      <Seo />
      <Preview />
      <Projects />
      <About />
      <Experience />
      <TechStack />
      <Contact />
    </Stack>
  );
}
