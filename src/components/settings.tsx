import { useTheme } from "next-themes";
import { Children, useEffect, useRef } from "react";
import { Box, ClientOnly, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { GlassMenu, GlassSwitch } from "@zakisheriff/liquid-glass";
import "@zakisheriff/liquid-glass/styles.css";
import { ChevronRight, Language, Moon, Text as TextIcon } from "reicon-react";
import { LANGUAGE_NAMES, useT } from "@/lib/i18n";
import { resetPreferences, setPreference, usePreferences, type Lang, type TextSize } from "@/lib/preferences";
import { useColorMode } from "./ui/color-mode";

const TEXT_SIZES: TextSize[] = ["sm", "md", "lg"];
const LANGS: Lang[] = ["en", "id"];

// iOS Settings layout: large title, uppercase section label, inset grouped list, footnote.
function Group(props: { title?: string; footer?: string; children: React.ReactNode }) {
   const { title, footer, children } = props;
   // iOS 26: a group with a single row is a capsule, a longer one has rounded corners.
   const rounded = Children.count(children) === 1 ? "full" : "3xl";
   return (
      <Stack gap={2}>
         {title && (
            <Text px={4} fontSize="xs" letterSpacing="0.04em" textTransform="uppercase" color="fg.muted">
               {title}
            </Text>
         )}
         <Box bg="bg.panel" borderWidth="1px" rounded={rounded}>
            {children}
         </Box>
         {footer && (
            <Text px={4} fontSize="xs" color="fg.muted">
               {footer}
            </Text>
         )}
      </Stack>
   );
}

function Divider() {
   return <Box height="1px" bg="border.muted" ml="58px" />;
}

function Row(props: {
   icon: React.ReactNode;
   tint: string;
   label: string;
   children: React.ReactNode;
   onClick?: React.MouseEventHandler;
   rowRef?: React.Ref<HTMLDivElement>;
}) {
   const { icon, tint, label, children, onClick, rowRef } = props;
   return (
      <Stack
         direction="row"
         alignItems="center"
         gap={3}
         px={4}
         minHeight="52px"
         cursor={onClick ? "pointer" : undefined}
         role={onClick ? "button" : undefined}
         tabIndex={onClick ? 0 : undefined}
         aria-haspopup={onClick ? "menu" : undefined}
         onClick={onClick}
         onKeyDown={(e) => {
            if (onClick && e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
               e.preventDefault();
               e.currentTarget.click();
            }
         }}
         ref={rowRef}
      >
         <Box
            display="grid"
            placeItems="center"
            boxSize="30px"
            rounded="lg"
            color="white"
            flexShrink={0}
            style={{ background: tint }}
            css={{ "& svg": { width: "18px", height: "18px" } }}
         >
            {icon}
         </Box>
         <Text flex={1} fontSize="md">
            {label}
         </Text>
         {children}
      </Stack>
   );
}

// Current value on the right, with a glass menu whose trigger is a chevron at the row's end.
function MenuRow<T extends string>(props: {
   icon: React.ReactNode;
   tint: string;
   label: string;
   options: { value: T; label: string }[];
   value: T;
   onSelect: (value: T) => void;
}) {
   const { icon, tint, label, options, value, onSelect } = props;
   const rowRef = useRef<HTMLDivElement>(null);
   const wasOpen = useRef(false);
   const trigger = () => rowRef.current?.querySelector<HTMLButtonElement>("button[aria-haspopup]");

   // The whole row opens the menu. GlassMenu closes itself on any press outside its trigger, in a
   // document-level capture listener, so a press that closed it must be noted before that runs and
   // the click that follows must not re-open it. A window-level capture listener runs first.
   useEffect(() => {
      const note = () => {
         wasOpen.current = trigger()?.getAttribute("aria-expanded") === "true";
      };
      window.addEventListener("pointerdown", note, true);
      return () => window.removeEventListener("pointerdown", note, true);
   }, []);

   const onClick = (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest(".lg-menu-anchor") || wasOpen.current) return;
      trigger()?.click();
   };

   return (
      <Row icon={icon} tint={tint} label={label} onClick={onClick} rowRef={rowRef}>
         <Text color="fg.muted" fontSize="md">
            {options.find((o) => o.value === value)?.label}
         </Text>
         {/* Apple-style: a bare chevron, no button. GlassMenu still needs its trigger to anchor and
             animate the menu, so the trigger stays in layout but is hidden; the row opens it. */}
         <Box
            position="relative"
            ml="-4"
            mr="-2"
            css={{ "& button[aria-haspopup]": { visibility: "hidden" } }}
         >
            <GlassMenu
               aria-label={label}
               icon={<ChevronRight />}
               size="sm"
               align="end"
               width={180}
               items={options.map((o) => ({
                  label: o.label,
                  checked: o.value === value,
                  onSelect: () => onSelect(o.value),
               }))}
            />
            <Box position="absolute" inset={0} display="grid" placeItems="center" color="fg.subtle" pointerEvents="none">
               <ChevronRight width={18} height={18} />
            </Box>
         </Box>
      </Row>
   );
}

export default function Settings() {
   const t = useT().settings;
   const prefs = usePreferences();
   const { colorMode, setColorMode } = useColorMode();
   const { setTheme } = useTheme();

   return (
      <Stack gap={6} animation="slide, fade-in" animationDuration="1s">
         <Heading as="h1" fontSize="4xl" fontWeight="bold" letterSpacing="-0.02em" px={1} pt={2}>
            {t.title}
         </Heading>

         <Group title={t.appearance} footer={t.appearanceFooter}>
            <Row icon={<Moon weight="Filled" />} tint="linear-gradient(180deg, #7d7aff, #5856d6)" label={t.darkMode}>
               <ClientOnly fallback={<Skeleton width="64px" height="28px" rounded="full" />}>
                  <GlassSwitch
                     aria-label={t.darkMode}
                     checked={colorMode === "dark"}
                     onChange={(on) => setColorMode(on ? "dark" : "light")}
                  />
               </ClientOnly>
            </Row>
            <Divider />
            <MenuRow
               icon={<TextIcon />}
               tint="linear-gradient(180deg, #4da3ff, #0a7aff)"
               label={t.textSize}
               options={TEXT_SIZES.map((value, i) => ({ value, label: t.textSizes[i] }))}
               value={prefs.textSize}
               onSelect={(v) => setPreference("textSize", v)}
            />
         </Group>

         <Group title={t.languageGroup} footer={t.languageFooter}>
            <MenuRow
               icon={<Language />}
               tint="linear-gradient(180deg, #ffb340, #ff9500)"
               label={t.language}
               options={LANGS.map((value) => ({ value, label: LANGUAGE_NAMES[value] }))}
               value={prefs.lang}
               onSelect={(v) => setPreference("lang", v)}
            />
         </Group>

         <Group footer={t.resetFooter}>
            <Box
               as="button"
               width="full"
               minHeight="52px"
               px={4}
               textAlign="center"
               fontSize="md"
               color="fg.error"
               cursor="pointer"
               rounded="full"
               _hover={{ bg: "bg.muted" }}
               onClick={() => {
                  resetPreferences();
                  setTheme("system");
               }}
            >
               {t.reset}
            </Box>
         </Group>
      </Stack>
   );
}
