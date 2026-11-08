import { Card, Heading } from "@chakra-ui/react";

export default function Spotify() {
  return (
    <Card.Root rounded="2xl" animation="slide, fade-in" animationDuration="1s">
      <Card.Body gap={3}>
        <Heading size="md" color="gray.500">Most Repeated Recently</Heading>
        <iframe title="Most Repeated Recently" data-testid="embed-iframe" style={{ borderRadius: "12px", border: 0 }} src="https://open.spotify.com/embed/playlist/2MbLeTLK2ddLOzccsyhkQs?utm_source=generator&theme=0&si=d82191052aff4d03" width="100%" height="352" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </Card.Body>
    </Card.Root>
  );
}
