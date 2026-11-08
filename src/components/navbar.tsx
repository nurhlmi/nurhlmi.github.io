import { Card, Container, IconButton, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Code, Envelope, Globe, Headphones, Home, User4 } from "reicon-react";
import { ColorModeButton } from "./ui/color-mode";
import { Tooltip } from "./ui/tooltip";

const navs = [
   { id: "home", label: "Home", icon: Home },
   { id: "about", label: "About", icon: User4 },
   { id: "projects", label: "Selected Works", icon: Globe },
   { id: "tech-stack", label: "Tech Stack", icon: Code },
   { id: "follow-me", label: "Contact & Follow Me", icon: Envelope },
]

const SONGS_NAV = { id: "songs", label: "Songs", icon: Headphones };

export default function Navbar() {
   const [active, setActive] = useState("home");
   const { pathname } = useRouter();
   const onSongs = pathname === "/songs";

   useEffect(() => {
      if (onSongs) return;
      // The active item is the last section whose top has reached the top of the viewport.
      const update = () => {
         if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
            setActive(navs[navs.length - 1].id);
            return;
         }
         let current = navs[0].id;
         navs.forEach((nav) => {
            const el = document.getElementById(nav.id);
            if (el && el.getBoundingClientRect().top <= 48) current = nav.id;
         });
         setActive(current);
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      return () => {
         window.removeEventListener("scroll", update);
         window.removeEventListener("resize", update);
      };
   }, [onSongs]);

   const items = [...navs, SONGS_NAV];

   return (
      <Container centerContent position="fixed" bottom={4} zIndex={1} pointerEvents="none">
         <Card.Root width="full" maxWidth={560} rounded="full" pointerEvents="auto" boxShadow="lg">
            <Card.Body p={2}>
               <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" gap={2}>
                     {items.map((nav, i) => {
                        const Icon = nav.icon;
                        const isSongs = nav.id === SONGS_NAV.id;
                        const isActive = isSongs ? onSongs : !onSongs && active === nav.id;
                        const href = isSongs ? "/songs" : onSongs ? `/#${nav.id}` : `#${nav.id}`;
                        return (
                           <Tooltip content={nav.label} key={i} positioning={{ placement: "top" }}>
                              <a href={href}>
                                 <IconButton variant={isActive ? "subtle" : "ghost"} rounded="full" aria-label={nav.label}>
                                    <Icon weight={isActive ? "Filled" : "Outline"} />
                                 </IconButton>
                              </a>
                           </Tooltip>
                        )
                     })}
                  </Stack>
                  <Stack direction="row" gap={2}>
                     <ColorModeButton />
                  </Stack>
               </Stack>
            </Card.Body>
         </Card.Root>
      </Container>
   );
}