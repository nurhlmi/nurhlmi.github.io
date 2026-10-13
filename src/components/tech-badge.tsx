import { Icon, Stack, Text } from "@chakra-ui/react";
import type { Tech } from "@/lib/tech";

export default function TechBadge(props: { tech: Tech; size?: "sm" | "md" }) {
  const { tech, size = "md" } = props;
  const small = size === "sm";
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={small ? 1.5 : 2}
      borderWidth="1px"
      rounded="full"
      pl={small ? 2 : 3}
      pr={small ? 2.5 : 4}
      py={small ? 1 : 2}
    >
      <Icon boxSize={small ? 4 : 5} color={tech.color ?? "currentColor"}>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d={tech.path} />
        </svg>
      </Icon>
      <Text fontSize={small ? "xs" : "sm"} fontWeight="medium">{tech.name}</Text>
    </Stack>
  );
}
