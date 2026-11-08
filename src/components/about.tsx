import { useT } from "@/lib/i18n";
import { Card, Heading, Text } from "@chakra-ui/react";

export default function About() {
  const t = useT().about;
  return (
    <Card.Root id="about" scrollMarginTop="24px" rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body gap={4}>
        <Heading size="xl" color="gray.500">{t.title}</Heading>
        <Text color="gray.500">{t.text}</Text>
      </Card.Body>
    </Card.Root>
  );
}
