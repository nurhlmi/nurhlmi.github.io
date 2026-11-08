import Seo from "@/components/seo";
import { useT } from "@/lib/i18n";
import Songs from "@/components/songs";
import { Stack } from "@chakra-ui/react";

export default function SongsPage() {
  const t = useT().nav;
  return (
    <Stack gap={4}>
      <Seo title={t.songs} />
      <Songs />
    </Stack>
  );
}
