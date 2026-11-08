import { useSyncExternalStore } from "react";

export type Lang = "en" | "id";
export type TextSize = "sm" | "md" | "lg";

export type Preferences = { lang: Lang; textSize: TextSize };

export const DEFAULTS: Preferences = { lang: "en", textSize: "md" };

// Chakra sizes everything in rem, so scaling the root font size scales the whole site.
export const TEXT_SIZE_PX: Record<TextSize, number> = { sm: 14, md: 16, lg: 18 };

export const STORAGE_KEY = "preferences";

const LANGS: Lang[] = ["en", "id"];
const SIZES: TextSize[] = ["sm", "md", "lg"];

const pick = <T extends string>(value: unknown, allowed: T[], fallback: T): T =>
  allowed.includes(value as T) ? (value as T) : fallback;

function read(): Preferences {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    return {
      lang: pick(raw.lang, LANGS, DEFAULTS.lang),
      textSize: pick(raw.textSize, SIZES, DEFAULTS.textSize),
    };
  } catch {
    return DEFAULTS;
  }
}

function apply(prefs: Preferences) {
  document.documentElement.style.fontSize = `${TEXT_SIZE_PX[prefs.textSize]}px`;
  document.documentElement.lang = prefs.lang;
}

const listeners = new Set<() => void>();
let current: Preferences | null = null;

function getSnapshot(): Preferences {
  if (!current) {
    current = read();
    apply(current);
  }
  return current;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setPreference<K extends keyof Preferences>(key: K, value: Preferences[K]) {
  current = { ...getSnapshot(), [key]: value };
  apply(current);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // Storage can be blocked (private mode); the choice still applies for this visit.
  }
  listeners.forEach((listener) => listener());
}

export function resetPreferences() {
  current = DEFAULTS;
  apply(current);
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing stored if storage is blocked.
  }
  listeners.forEach((listener) => listener());
}

export function usePreferences(): Preferences {
  return useSyncExternalStore(subscribe, getSnapshot, () => DEFAULTS);
}
