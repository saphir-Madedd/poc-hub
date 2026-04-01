import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CSS_VAR_MAP, THEMES } from "./constantes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fetchTheme(id: string): BrandTheme {
  try {
    const theme = THEMES[id];
    return theme;
  } catch (error) {
    console.log(error);
    throw new Error("error fetching theme");
  }
}

export function applyTheme(theme: BrandTheme) {
  const root = document.documentElement;
  CSS_VAR_MAP.forEach(([cssVar, key]) =>
    root.style.setProperty(cssVar, theme[key] as string),
  );
}

export function resetTheme() {
  const root = document.documentElement;
  CSS_VAR_MAP.forEach(([cssVar]) => root.style.removeProperty(cssVar));
}
