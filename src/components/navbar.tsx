import { Box, ClientOnly, Container, Stack } from "@chakra-ui/react";
import { GlassButton, GlassNav } from "@zakisheriff/liquid-glass";
import "@zakisheriff/liquid-glass/styles.css";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";
import { Briefcase, Envelope, Home, Moon, Sun, User } from "reicon-react";
import { useColorMode } from "./ui/color-mode";

const items = [
   { id: "home", key: "home", icon: Home },
   { id: "works", key: "works", icon: Briefcase },
   { id: "about", key: "about", icon: User },
   { id: "contact", key: "contact", icon: Envelope },
] as const;

export default function Navbar() {
   const t = useT().nav;
   const { colorMode, toggleColorMode } = useColorMode();
   const [activeIndex, setActiveIndex] = useState(0);

   // The active item is the last section whose top has scrolled past the upper third of the viewport.
   useEffect(() => {
      const update = () => {
         const line = window.innerHeight / 3;
         const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
         let current = 0;
         items.forEach((item, i) => {
            const el = document.getElementById(item.id);
            if (el && el.getBoundingClientRect().top <= line) current = i;
         });
         setActiveIndex(window.scrollY < 8 ? 0 : atBottom ? items.length - 1 : current);
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      return () => {
         window.removeEventListener("scroll", update);
         window.removeEventListener("resize", update);
      };
   }, []);

   const go = (index: number) => {
      const { id } = items[index];
      history.replaceState(null, "", id === "home" ? window.location.pathname : `#${id}`);
      if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
   };

   return (
      <Container centerContent position="fixed" bottom={4} zIndex={1} pointerEvents="none">
         <Stack direction="row" alignItems="center" gap={2} pointerEvents="auto">
            <Box>
               <GlassNav
                  aria-label="Main navigation"
                  activeIndex={activeIndex}
                  onChange={go}
                  items={items.map(({ key, icon: Icon }) => ({ label: t[key], icon: <Icon /> }))}
               />
            </Box>
            <ClientOnly>
               <GlassButton
                  aria-label={t.darkMode}
                  size="lg"
                  style={{ "--lg-h": "68px" } as React.CSSProperties}
                  icon={colorMode === "dark" ? <Sun /> : <Moon />}
                  onClick={toggleColorMode}
               />
            </ClientOnly>
         </Stack>
      </Container>
   );
}
