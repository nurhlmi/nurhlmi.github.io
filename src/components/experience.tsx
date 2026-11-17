import { Badge, Box, Card, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { Buildings } from "reicon-react";
import { EXPERIENCE, type ExperienceEntry } from "@/data/profile";
import { useT } from "@/lib/i18n";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const label = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
};

/** Inclusive month count, e.g. "2 yrs 5 mos". */
const duration = (start: string, end?: string) => {
  const [sy, sm] = start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const total = (ey - sy) * 12 + (em - sm) + (end ? 1 : 0);
  const y = Math.floor(total / 12);
  const m = total % 12;
  return [y && `${y} ${y === 1 ? "yr" : "yrs"}`, m && `${m} ${m === 1 ? "mo" : "mos"}`].filter(Boolean).join(" ");
};

const initials = (name: string) =>
  name.replace(/^(PT\.?|Kementerian)\s+/i, "").split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

function Logo({ e }: { e: ExperienceEntry }) {
  const current = !e.end;
  return (
    <Box
      position="absolute"
      left="-24px"
      top={0}
      boxSize="48px"
      rounded="full"
      bg="white"
      borderWidth="2px"
      borderColor={current ? "green.500" : "border"}
      overflow="hidden"
      display="grid"
      placeItems="center"
    >
      {e.logo ? (
        <Image src={e.logo} alt={`${e.company} logo`} boxSize="full" objectFit="contain" p={2} />
      ) : (
        <Text fontWeight="semibold" color="gray.700" fontSize="sm">{initials(e.company)}</Text>
      )}
    </Box>
  );
}

function Entry({ e, present }: { e: ExperienceEntry; present: string }) {
  return (
    <Box position="relative" pl={10} pb={8} _last={{ pb: 0 }}>
      <Logo e={e} />
      <Stack gap={1} minH="48px" justifyContent="center">
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={3}>
          <Text fontWeight="semibold">{e.role}</Text>
          {!e.end && <Badge colorPalette="green" rounded="full" size="sm">{present}</Badge>}
        </Stack>
        <Text fontSize="sm">
          {e.href ? <Link href={e.href} target="_blank" rel="noopener noreferrer">{e.company}</Link> : e.company} · {e.type}
        </Text>
        <Text color="gray.500" fontSize="sm">
          {label(e.start)} - {e.end ? label(e.end) : present} · {duration(e.start, e.end)}
        </Text>
        <Text color="gray.500" fontSize="sm" mt={2}>{e.description}</Text>
      </Stack>
    </Box>
  );
}

export default function Experience() {
  const t = useT().experience;
  return (
    <Card.Root id="experience" scrollMarginTop="24px" rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body gap={4}>
        <Stack direction="row" alignItems="center" gap={3}>
          <Buildings width={28} height={28} color="var(--chakra-colors-gray-500)" />
          <Heading size="xl" color="gray.500">{t.title}</Heading>
        </Stack>
        <Box borderLeftWidth="2px" borderColor="border" ml={6} mt={2}>
          {EXPERIENCE.map((e) => (
            <Entry key={e.start} e={e} present={t.present} />
          ))}
        </Box>
      </Card.Body>
    </Card.Root>
  );
}
