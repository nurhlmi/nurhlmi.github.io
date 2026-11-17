import { type ReactNode, useEffect, useRef, useState } from "react";
import { Island, IslandProvider, useIsland } from "@/lib/island";
import HeldActivity from "./held-activity";
import ThemeIsland from "./theme-island";
import { useColorMode } from "./ui/color-mode";

const NOTICE_MS = 1500;
const DISMISS_MS = 150;

/** The island, hidden while idle once its dismiss motion has finished. */
function HidingIsland({ backdrop }: { backdrop: string }) {
  const { presentation } = useIsland();
  const idle = presentation === "idle";
  return (
    <Island
      placement="viewport"
      backdrop={backdrop}
      style={{
        opacity: idle ? 0 : 1,
        visibility: idle ? "hidden" : "visible",
        pointerEvents: idle ? "none" : undefined,
        transition: idle
          ? `opacity 100ms ${DISMISS_MS}ms, visibility 0s ${DISMISS_MS + 100}ms`
          : "opacity 0s, visibility 0s",
      }}
    />
  );
}

export default function IslandHost({ children }: { children: ReactNode }) {
  const { colorMode } = useColorMode();
  const previous = useRef(colorMode);
  const [changed, setChanged] = useState(false);

  // Show the island only when the mode changes, not for the first resolved value on load.
  useEffect(() => {
    const before = previous.current;
    previous.current = colorMode;
    if (!before || before === colorMode) return;
    setChanged(true);
    const timer = setTimeout(() => setChanged(false), NOTICE_MS);
    return () => clearTimeout(timer);
  }, [colorMode]);

  return (
    <IslandProvider>
      <HidingIsland backdrop={colorMode === "dark" ? "#0b0b0f" : "#ffffff"} />
      <HeldActivity active={changed}>
        <ThemeIsland mode={colorMode} />
      </HeldActivity>
      {children}
    </IslandProvider>
  );
}
