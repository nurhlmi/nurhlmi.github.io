import { useT } from "@/lib/i18n";
import { User } from "reicon-react";
import { Card, Heading, Stack, Text } from "@chakra-ui/react";

export default function About() {
  const t = useT().about;
  return (
    <Card.Root id="about" scrollMarginTop="24px" rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body gap={4}>
        <Stack direction="row" alignItems="center" gap={3}>
          <User width={28} height={28} color="var(--chakra-colors-gray-500)" />
          <Heading size="xl" color="gray.500">{t.title}</Heading>
        </Stack>
        <Text color="gray.500">{t.text}</Text>
      </Card.Body>
    </Card.Root>
  );
}
