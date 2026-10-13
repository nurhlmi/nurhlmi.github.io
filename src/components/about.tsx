import { SITE } from "@/lib/site";
import { Card, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Card.Root id="about" scrollMarginTop="24px" rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body gap={4}>
        <Heading size="xl" color="gray.500">About Me</Heading>
        <Text color="gray.500">{SITE.about}</Text>
      </Card.Body>
    </Card.Root>
  );
}
