import { type ReactNode, useState } from "react";
import { useIsland } from "@/lib/island";

/**
 * Renders an activity while `active`, and keeps it past that while the island is expanded, so a
 * user who opened it is not cut off. It ends when the island collapses.
 */
export default function HeldActivity({ active, children }: { active: boolean; children: ReactNode }) {
  const expanded = useIsland().presentation === "expanded";
  const [held, setHeld] = useState(false);

  if (active && !held) setHeld(true);
  else if (!active && held && !expanded) setHeld(false);

  return active || held ? <>{children}</> : null;
}
