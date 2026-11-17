import { Card, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import { SITE } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { socials } from "./contact";

export default function Footer() {
  const t = useT().footer;
  return (
    <Card.Root as="footer" rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body py={5} gap={4} alignItems="center">
        <Stack direction="row" gap={2} justifyContent="center">
          {socials.map((s) => (
            <IconButton key={s.label} asChild variant="outline" rounded="full" size="sm" aria-label={`${s.label} ${s.handle}`}>
              <Link href={s.href} target="_blank" rel="noopener noreferrer">
                {s.icon}
              </Link>
            </IconButton>
          ))}
        </Stack>
        <Text textAlign="center" color="gray.500" fontSize="sm">
          © {new Date().getFullYear()} {SITE.name}. {t.rights}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}
