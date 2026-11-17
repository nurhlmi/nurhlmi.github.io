import Seo from "@/components/seo";
import SectionCard from "@/components/section-card";
import { Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useT } from "@/lib/i18n";

export default function NotFound() {
  const t = useT().notFound;
  return (
    <>
      <Seo title={t.title} />
      <SectionCard title={t.title} as="h1">
        <Text color="gray.500">{t.text}</Text>
        <Button asChild rounded="full" size="sm" alignSelf="flex-start">
          <NextLink href="/">{t.back}</NextLink>
        </Button>
      </SectionCard>
    </>
  );
}
