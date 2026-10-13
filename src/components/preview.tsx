import CopyEmail from "@/components/copy-email";
import { Avatar, Badge, Box, Button, Card, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { Download } from "reicon-react";

export default function Preview() {
  return (
    <Card.Root id="home" scrollMarginTop="24px" rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Heading size="xl" color="gray.500">Frontend Developer</Heading>
          <Badge colorPalette="green" rounded="full" size="sm">Available</Badge>
        </Stack>
        <Stack direction={{ base: "column-reverse", md: "row" }} justifyContent="space-between" alignItems="center" gap={5} mt={10}>
          <Stack textAlign={{ base: "center", md: "start" }}>
            <Heading size="4xl">I’m Nur Hilmi</Heading>
            <Text color="gray.500" maxWidth={300}>
              Frontend Developer from Jakarta, ID. Currently working at <Link href="https://kop.go.id" target="_blank">Kemenkop</Link>.
            </Text>
            <Stack direction="row" gap={2} justifyContent={{ base: "center", md: "start" }} mt={2}>
              <Button asChild rounded="full" size="sm">
                <a href="/cv.pdf" download="CV-Nur-Hilmi.pdf"><Download /> Download CV</a>
              </Button>
              <CopyEmail />
            </Stack>
          </Stack>
          <Box p={1.5} rounded="full" borderWidth="1px" bg="bg.muted" flexShrink={0}>
            <Avatar.Root boxSize="120px" shape="full">
              <Avatar.Fallback>
                <Image src="/avatar.png" alt="Nur Hilmi" boxSize="full" objectFit="cover" />
              </Avatar.Fallback>
              <Avatar.Image src="https://github.com/nurhlmi.png?size=240" alt="Nur Hilmi" objectFit="cover" />
            </Avatar.Root>
          </Box>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
