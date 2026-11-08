export type Song = {
  category: string;
  title: string;
  artist: string;
  /** Spotify track ID. When missing, the card falls back to a Spotify search link. */
  spotifyId?: string;
  /** SoundCloud track ID, used when the song is not on Spotify. */
  soundcloudId?: string;
};

/** Photos live in public/artists/<image>. Missing files fall back to initials. */
export const TOP_ARTISTS = [
  { name: "Eizy", image: "/artists/eizy.jpg" },
  { name: "Insthinc", image: "/artists/insthinc.jpg" },
  { name: "MukaRakat", image: "/artists/mukarakat.jpg" },
];

export const SONGS: Song[] = [
  { category: "Top Favorite Song", title: "Lagi", artist: "Eizy", spotifyId: "1hauK7UIgNo4akcNs53Fvv" },
  { category: "Top R&B Song", title: "So Sick", artist: "Ne-Yo", spotifyId: "6brl7bwOHmGFkNw3MBqssT" },
  { category: "Top Hip-Hop Song", title: "IDR (Ini Dangdut Rakat)", artist: "MukaRakat", spotifyId: "6W0ut2FZylqElBLRC5ucZ5" },
  { category: "Top Hardcore Hip-Hop Song", title: "Sakaratul", artist: "Joe Million", spotifyId: "31Yw3ekXRdrZCKdFsjcZ96" },
  { category: "Top EDM Song", title: "Ritual", artist: "Marshmello", spotifyId: "04AYgtKFrpldRXe5y0LNGQ" },
  { category: "Top Hipdut Song", title: "Dalam Dalam", artist: "Ryo", spotifyId: "2FeBYxuV0UQ5KPo4jiUE73" },
  { category: "Top Pop Song", title: "Ku Katakan Dengan Indah", artist: "Peterpan", spotifyId: "0hgXZlTYCStVKY3kdSZS5V" },
  { category: "Top Pop Ballad Song", title: "Shape of My Heart", artist: "Backstreet Boys", spotifyId: "35o9a4iAfLl5jRmqMX9c1D" },
  { category: "Top Indie Song", title: "You", artist: "Icecream x Asdialy x N'eisi-o", soundcloudId: "252586492" },
  { category: "Top Trap Chill Song", title: "Jarak", artist: "Asdialy feat. Efro", soundcloudId: "434345259" },
  { category: "Top Lo-Fi Song", title: "Rahasia", artist: "Icecream", soundcloudId: "348043446" },
];

export const spotifySearchUrl = (s: Song) =>
  `https://open.spotify.com/search/${encodeURIComponent(`${s.artist} ${s.title}`)}`;
