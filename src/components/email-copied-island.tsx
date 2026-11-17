import { Glyph } from "@/components/islandcn/glyph";
import { CheckCircleGlyph } from "@/components/islandcn/glyphs";
import { ExpandedBottom, SensorRow } from "@/components/islandcn/island-layout";
import { CompactText, ContextLabel, ExpandedSubtitle, ExpandedTitle, MinimalPair } from "@/components/islandcn/island-text";
import { islandAccent } from "@/components/islandcn/theme";
import { useActivity } from "@/components/islandcn/use-activity";
import { EMAIL } from "@/lib/contact";
import { useT } from "@/lib/i18n";

/** Render while the email shows as copied; unmount when it resets. */
export default function EmailCopiedIsland() {
  const t = useT().home;
  const accent = islandAccent.green;
  useActivity(
    () => ({
      id: "email-copied",
      label: `${t.copied}: ${EMAIL}`,
      compact: {
        leading: <Glyph icon={CheckCircleGlyph} color={accent} />,
        trailing: <CompactText>{t.copied}</CompactText>,
      },
      minimal: <MinimalPair leading={<Glyph icon={CheckCircleGlyph} color={accent} />} trailing={<CompactText>{t.copied}</CompactText>} />,
      expanded: {
        leading: (
          <SensorRow glyph={<Glyph icon={CheckCircleGlyph} color={accent} size={18} />}>
            <ContextLabel>{t.copiedLabel}</ContextLabel>
          </SensorRow>
        ),
        bottom: (
          <ExpandedBottom gap={2} reach="inset">
            <ExpandedTitle>{t.copied}</ExpandedTitle>
            <ExpandedSubtitle>{EMAIL}</ExpandedSubtitle>
          </ExpandedBottom>
        ),
      },
    }),
    [t.copied, t.copiedLabel, accent],
  );
  return null;
}
