import { Glyph } from "@/components/islandcn/glyph";
import { glyphFrom } from "@/components/islandcn/glyphs";
import { ExpandedBottom, SensorRow } from "@/components/islandcn/island-layout";
import { CompactText, ContextLabel, ExpandedSubtitle, ExpandedTitle, MinimalPair } from "@/components/islandcn/island-text";
import { islandAccent } from "@/components/islandcn/theme";
import { useActivity } from "@/components/islandcn/use-activity";
import { useT } from "@/lib/i18n";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";

const MoonGlyph = glyphFrom("MoonGlyph", Moon02Icon);
const SunGlyph = glyphFrom("SunGlyph", Sun03Icon);

/** Render briefly after the color mode changes; unmount when it resets. */
export default function ThemeIsland({ mode }: { mode: "light" | "dark" }) {
  const t = useT().nav;
  const dark = mode === "dark";
  const icon = dark ? MoonGlyph : SunGlyph;
  const color = dark ? islandAccent.blue : islandAccent.yellow;
  const name = dark ? t.themeDark : t.themeLight;
  const detail = dark ? t.themeDarkDetail : t.themeLightDetail;
  useActivity(
    () => ({
      id: "theme",
      label: name,
      compact: {
        leading: <Glyph icon={icon} color={color} />,
        trailing: <CompactText>{t.themeOn}</CompactText>,
      },
      minimal: <MinimalPair leading={<Glyph icon={icon} color={color} />} trailing={<CompactText>{t.themeOn}</CompactText>} />,
      expanded: {
        leading: (
          <SensorRow glyph={<Glyph icon={icon} color={color} size={18} />}>
            <ContextLabel>{t.themeLabel}</ContextLabel>
          </SensorRow>
        ),
        bottom: (
          <ExpandedBottom gap={2} reach="inset">
            <ExpandedTitle>{name}</ExpandedTitle>
            <ExpandedSubtitle>{detail}</ExpandedSubtitle>
          </ExpandedBottom>
        ),
      },
    }),
    [icon, color, name, detail, t.themeLabel, t.themeOn],
  );
  return null;
}
