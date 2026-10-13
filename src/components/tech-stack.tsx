import { TECH, type TechKey } from "@/lib/tech";
import { Card, Heading, Stack } from "@chakra-ui/react";
import TechBadge from "./tech-badge";

const stack: TechKey[] = [
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "mui",
  "chakra",
  "git",
  "github",
  "docker",
  "antigravity",
  "claudecode",
];

export default function TechStack() {
  return (
    <Card.Root id="tech-stack" scrollMarginTop="24px" rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body gap={4}>
        <Heading size="xl" color="gray.500">Tech Stack</Heading>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {stack.map((key) => (
            <TechBadge key={key} tech={TECH[key]} />
          ))}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
