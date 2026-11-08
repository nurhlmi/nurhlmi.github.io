import Seo from "@/components/seo";
import Songs from "@/components/songs";
import { Stack } from "@chakra-ui/react";

export default function SongsPage() {
  return (
    <Stack gap={4}>
      <Seo title="Songs" />
      <Songs />
    </Stack>
  );
}
