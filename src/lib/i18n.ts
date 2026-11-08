import { usePreferences, type Lang } from "./preferences";

const en = {
  nav: { home: "Home", songs: "Songs", settings: "Settings" },
  seo: {
    description: "Frontend Developer from Jakarta, ID. Currently working at Kemenkop. Portfolio and selected projects.",
    ogDescription: "Frontend Developer from Jakarta, ID. Portfolio and selected projects.",
  },
  home: {
    role: "Frontend Developer",
    available: "Available",
    greeting: "I’m Nur Hilmi",
    bioBefore: "Frontend Developer from Jakarta, ID. Currently working at ",
    bioAfter: ".",
    downloadCv: "Download CV",
    copyEmail: "Copy Email",
    copied: "Copied",
  },
  about: {
    title: "About Me",
    text: "Frontend Developer with experience since 2019, holding a Bachelor's degree in Informatics Engineering from Universitas Indraprasta PGRI. Passionate about building responsive, intuitive, and high-quality web applications using modern frontend technologies. Awarded 2nd place in the Go Green ICT competition.",
  },
  projects: {
    title: "Selected Works",
    descriptions: {
      "ODS Mandiri": "Official Cooperative Data • Present",
      "PT Wiratman": "Architecture & engineering • 2025",
      "PT Ketira Engineering Consultants": "Engineering consultancy • 2024",
      "i-Vigilant": "Company website • 2024",
      Lamikro: "Micro business accounting • 2019",
    } as Record<string, string>,
  },
  techStack: { title: "Tech Stack" },
  contact: { title: "Contact & Follow Me" },
  songs: {
    topArtists: "Top Artists",
    openOnSpotify: "Open on Spotify",
    search: "Search",
    mostRepeated: "Most Repeated Recently",
    categories: {} as Record<string, string>,
  },
  settings: {
    title: "Settings",
    appearance: "Appearance",
    appearanceFooter: "Adjust how the site looks. Your choices are saved on this device.",
    darkMode: "Dark Mode",
    textSize: "Text Size",
    textSizes: ["Small", "Normal", "Large"],
    languageGroup: "Language",
    language: "Language",
    languageFooter: "Changes the language of the whole site.",
    reset: "Reset to Default",
    resetFooter: "Restores the theme, text size and language.",
  },
};

type Dict = typeof en;

const id: Dict = {
  nav: { home: "Beranda", songs: "Lagu", settings: "Pengaturan" },
  seo: {
    description: "Frontend Developer dari Jakarta, ID. Saat ini bekerja di Kemenkop. Portofolio dan proyek pilihan.",
    ogDescription: "Frontend Developer dari Jakarta, ID. Portofolio dan proyek pilihan.",
  },
  home: {
    role: "Frontend Developer",
    available: "Tersedia",
    greeting: "Saya Nur Hilmi",
    bioBefore: "Frontend Developer dari Jakarta, ID. Saat ini bekerja di ",
    bioAfter: ".",
    downloadCv: "Unduh CV",
    copyEmail: "Salin Email",
    copied: "Tersalin",
  },
  about: {
    title: "Tentang Saya",
    text: "Frontend Developer dengan pengalaman sejak 2019, bergelar Sarjana Teknik Informatika dari Universitas Indraprasta PGRI. Bersemangat membangun aplikasi web yang responsif, intuitif, dan berkualitas tinggi dengan teknologi frontend modern. Meraih juara 2 pada kompetisi Go Green ICT.",
  },
  projects: {
    title: "Karya Pilihan",
    descriptions: {
      "ODS Mandiri": "Data Resmi Koperasi • Sekarang",
      "PT Wiratman": "Arsitektur & rekayasa • 2025",
      "PT Ketira Engineering Consultants": "Konsultan teknik • 2024",
      "i-Vigilant": "Situs perusahaan • 2024",
      Lamikro: "Akuntansi usaha mikro • 2019",
    },
  },
  techStack: { title: "Teknologi" },
  contact: { title: "Kontak & Ikuti Saya" },
  songs: {
    topArtists: "Artis Terfavorit",
    openOnSpotify: "Buka di Spotify",
    search: "Cari",
    mostRepeated: "Paling Sering Diputar Belakangan Ini",
    categories: {
      "Top Favorite Song": "Lagu Favorit Terbaik",
      "Top R&B Song": "Lagu R&B Terbaik",
      "Top Hip-Hop Song": "Lagu Hip-Hop Terbaik",
      "Top Hardcore Hip-Hop Song": "Lagu Hip-Hop Hardcore Terbaik",
      "Top EDM Song": "Lagu EDM Terbaik",
      "Top Hipdut Song": "Lagu Hipdut Terbaik",
      "Top Pop Song": "Lagu Pop Terbaik",
      "Top Pop Ballad Song": "Lagu Pop Ballad Terbaik",
      "Top Indie Song": "Lagu Indie Terbaik",
      "Top Trap Chill Song": "Lagu Trap Chill Terbaik",
      "Top Lo-Fi Song": "Lagu Lo-Fi Terbaik",
    },
  },
  settings: {
    title: "Pengaturan",
    appearance: "Tampilan",
    appearanceFooter: "Atur tampilan situs. Pilihan Anda disimpan di perangkat ini.",
    darkMode: "Mode Gelap",
    textSize: "Ukuran Teks",
    textSizes: ["Kecil", "Normal", "Besar"],
    languageGroup: "Bahasa",
    language: "Bahasa",
    languageFooter: "Mengubah bahasa seluruh situs.",
    reset: "Atur Ulang ke Default",
    resetFooter: "Mengembalikan tema, ukuran teks, dan bahasa.",
  },
};

export const LANGUAGE_NAMES: Record<Lang, string> = { en: "English", id: "Indonesia" };

const dictionaries: Record<Lang, Dict> = { en, id };

export const dict = (lang: Lang): Dict => dictionaries[lang];

export function useT(): Dict {
  return dict(usePreferences().lang);
}
