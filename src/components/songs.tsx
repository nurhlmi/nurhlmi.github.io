import { Avatar, Badge, Box, Button, Card, Heading, Stack, Text } from "@chakra-ui/react";
import { ArrowUpRightSquare } from "reicon-react";
import Spotify from "./spotify";
import { useT } from "@/lib/i18n";
import { SONGS, TOP_ARTISTS, spotifySearchUrl, type Song } from "@/lib/songs";

const MEDALS = ["#f5b301", "#9ca3af", "#b4691f"];

export function TopArtists() {
  const t = useT().songs;
  // Podium order: #2, #1, #3 so the winner sits in the middle and stands taller.
  const podium = [1, 0, 2].map((i) => ({ ...TOP_ARTISTS[i], rank: i }));
  return (
    <Card.Root id="top-artists" scrollMarginTop="24px" rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body gap={4}>
        <Heading size="xl" color="gray.500">{t.topArtists}</Heading>
        <Stack direction="row" gap={3} alignItems="flex-end">
          {podium.map((artist) => {
            const first = artist.rank === 0;
            return (
              <Stack
                key={artist.name}
                flex={1}
                minWidth={0}
                alignItems="center"
                gap={2}
                borderWidth="1px"
                rounded="2xl"
                px={2}
                pt={first ? 6 : 4}
                pb={first ? 6 : 4}
                bg={first ? "bg.muted" : undefined}
                style={first ? { borderColor: MEDALS[0] } : undefined}
              >
                <Box position="relative">
                  <Avatar.Root boxSize={first ? "88px" : "68px"} shape="full" style={{ outline: `3px solid ${MEDALS[artist.rank]}`, outlineOffset: 2 }}>
                    <Avatar.Fallback name={artist.name} />
                    <Avatar.Image src={artist.image} alt={artist.name} objectFit="cover" />
                  </Avatar.Root>
                  <Box
                    position="absolute"
                    bottom="-6px"
                    right="-6px"
                    boxSize="26px"
                    rounded="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                    fontSize="sm"
                    color="black"
                    style={{ background: MEDALS[artist.rank] }}
                  >
                    {artist.rank + 1}
                  </Box>
                </Box>
                <Text fontWeight="semibold" textAlign="center" truncate maxWidth="full" mt={1}>{artist.name}</Text>
              </Stack>
            );
          })}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}

function SongCard({ song }: { song: Song }) {
  const t = useT().songs;
  return (
    <Card.Root rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body gap={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Heading size="md" color="gray.500">{t.categories[song.category] ?? song.category}</Heading>
        </Stack>
        {song.spotifyId ? (
          <iframe
            title={`${song.artist} - ${song.title}`}
            style={{ borderRadius: "12px", border: 0 }}
            src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator`}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ) : song.soundcloudId ? (
          <iframe
            title={`${song.artist} - ${song.title}`}
            style={{ borderRadius: "12px", border: 0 }}
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.soundcloudId}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
            width="100%"
            height="166"
            allow="autoplay; encrypted-media"
            loading="lazy"
          />
        ) : (
          <Box borderWidth="1px" rounded="xl" p={4}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={3}>
              <Badge rounded="full" size="sm">{t.openOnSpotify}</Badge>
              <Button asChild size="sm" rounded="full" variant="subtle">
                <a href={spotifySearchUrl(song)} target="_blank" rel="noreferrer">
                  {t.search} <ArrowUpRightSquare />
                </a>
              </Button>
            </Stack>
          </Box>
        )}
      </Card.Body>
    </Card.Root>
  );
}

export default function Songs() {
  return (
    <>
      <TopArtists />
      {SONGS.map((song) => (
        <SongCard key={song.category} song={song} />
      ))}
      <Spotify />
    </>
  );
}
