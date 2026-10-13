import { Box, Card, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { ArrowUpRightSquare } from "reicon-react";
import { TECH, type TechKey } from "@/lib/tech";
import TechBadge from "./tech-badge";

export type ListItem = { title: string; description: string; href: string; image?: string; accent?: [string, string]; stack?: readonly TechKey[] };

export default function ListSection(props: {
  title: string;
  id?: string;
  items: ListItem[];
}) {
  const { title, id, items } = props;
  return (
    <Card.Root id={id} scrollMarginTop="24px" rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body gap={4}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Heading size="xl" color="gray.500">{title}</Heading>
        </Stack>
        <Stack gap={3}>
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              variant="plain"
              display="block"
              _hover={{ textDecoration: "none", bg: "bg.muted" }}
              borderWidth="1px"
              rounded="xl"
              overflow="hidden"
              role="group"
            >
              {item.image && (
                <Box
                  pt={6}
                  px={{ base: 5, md: 8 }}
                  overflow="hidden"
                  borderBottomWidth="1px"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent?.[0] ?? "#334155"}, ${item.accent?.[1] ?? "#0f172a"})`,
                  }}
                >
                  <Box
                    rounded="lg"
                    roundedBottom="none"
                    overflow="hidden"
                    bg="black"
                    boxShadow="0 -4px 30px rgba(0,0,0,0.35)"
                    transition="transform 0.3s ease"
                    _groupHover={{ transform: "translateY(-6px)" }}
                  >
                    <Stack direction="row" alignItems="center" gap={1.5} px={3} py={2} bg="#1c1c1e">
                      {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                        <Box key={c} boxSize="8px" rounded="full" style={{ background: c }} />
                      ))}
                      <Text
                        flex={1}
                        mx={3}
                        px={3}
                        py="1px"
                        rounded="md"
                        bg="whiteAlpha.100"
                        color="whiteAlpha.700"
                        fontSize="2xs"
                        textAlign="center"
                        truncate
                      >
                        {new URL(item.href).hostname.replace(/^www\./, "")}
                      </Text>
                    </Stack>
                    <Image
                      src={item.image}
                      alt={`${item.title} preview`}
                      aspectRatio={16 / 8}
                      width="full"
                      objectFit="cover"
                      objectPosition="top"
                    />
                  </Box>
                </Box>
              )}
              <Stack direction="row" justifyContent="space-between" alignItems="center" px={5} py={4}>
                <Stack gap={0}>
                  <Text fontWeight="semibold">{item.title}</Text>
                  <Text color="gray.500" fontSize="sm">{item.description}</Text>
                  {item.stack && (
                    <Stack direction="row" flexWrap="wrap" gap={1.5} mt={2}>
                      {item.stack.map((key) => (
                        <TechBadge key={key} tech={TECH[key]} size="sm" />
                      ))}
                    </Stack>
                  )}
                </Stack>
                <ArrowUpRightSquare />
              </Stack>
            </Link>
          ))}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
