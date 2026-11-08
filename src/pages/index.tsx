import About from "@/components/about";
import FollowMe from "@/components/follow-me";
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
      <About />
      <Projects />
      <TechStack />
      <FollowMe />
    </Stack>
  );
}
