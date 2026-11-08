import { Box, Container } from "@chakra-ui/react";
import { GlassNav } from "@zakisheriff/liquid-glass";
import "@zakisheriff/liquid-glass/styles.css";
import { useRouter } from "next/router";
import { useT } from "@/lib/i18n";
import { Headphones, Home, Settings } from "reicon-react";

const items = [
   { href: "/", key: "home", icon: Home },
   { href: "/songs", key: "songs", icon: Headphones },
   { href: "/settings", key: "settings", icon: Settings },
] as const;

export default function Navbar() {
   const router = useRouter();
   const t = useT().nav;
   const activeIndex = Math.max(0, items.findIndex((item) => item.href === router.pathname));

   const go = (index: number) => {
      const { href } = items[index];
      if (href === router.pathname) window.scrollTo({ top: 0, behavior: "smooth" });
      else router.push(href);
   };

   return (
      <Container centerContent position="fixed" bottom={4} zIndex={1} pointerEvents="none">
         <Box pointerEvents="auto" css={{ "& .lg-track__item": { paddingInline: "22px" } }}>
         <GlassNav
            aria-label="Main navigation"
            activeIndex={activeIndex}
            onChange={go}
            items={items.map(({ key, icon: Icon }) => ({ label: t[key], icon: <Icon /> }))}
         />
         </Box>
      </Container>
   );
}
