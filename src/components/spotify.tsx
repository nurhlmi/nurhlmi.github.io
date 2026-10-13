import { Card } from "@chakra-ui/react";

export default function Spotify() {
  return (
    <Card.Root rounded="2xl">
      <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/2MbLeTLK2ddLOzccsyhkQs?utm_source=generator&theme=0&si=d82191052aff4d03" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </Card.Root>
  )
}
