import Seo from "@/components/seo";
import { useT } from "@/lib/i18n";
import Settings from "@/components/settings";
import { Stack } from "@chakra-ui/react";

export default function SettingsPage() {
  const t = useT().nav;
  return (
    <Stack gap={4}>
      <Seo title={t.settings} />
      <Settings />
    </Stack>
  );
}
