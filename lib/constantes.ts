export const THEME_DISPLAY_KEYS = [
  "id",
  "displayName",
  "logoUrl",
  "primaryColor",
  "secondaryColor",
  "accentColor",
] as const satisfies ReadonlyArray<keyof BrandTheme>;

export const THEMES: Record<string, BrandTheme> = {
  "1": {
    id: "brand-a",
    displayName: "Brand A",
    logoUrl: "/themes/brand-a/logo.png",
    primaryColor: "#7EAC31",
    secondaryColor: "#FFC20E",
    accentColor: "#00A3E0",
    backgroundColor: "#F8FDE8",
    foregroundColor: "#699F11",
  },
  "2": {
    id: "brand-b",
    displayName: "Brand B",
    logoUrl: "/themes/brand-b/logo.png",
    primaryColor: "#B7A165",
    secondaryColor: "#F4A261",
    accentColor: "#E76F51",
    backgroundColor: "#B7A1651A",
    foregroundColor: "#B7A165",
  },
  "3": {
    id: "brand-c",
    displayName: "Brand C",
    logoUrl: "/themes/brand-c/logo.png",
    primaryColor: "#036F8B",
    secondaryColor: "#036F8B",
    accentColor: "#DB2777",
    backgroundColor: "#036F8B1A",
    foregroundColor: "#036F8B",
  },
};

export const CSS_VAR_MAP: Array<[string, keyof BrandTheme]> = [
  ["--system-card-hover-background", "backgroundColor"],
  ["--system-card-border", "foregroundColor"],
  ["--primary", "primaryColor"],
  ["--system-card-icon", "primaryColor"],
  ["--system-card-title", "primaryColor"],
  ["--system-card-arrow-icon", "primaryColor"],
  ["--system-card-arrow-border", "primaryColor"],
  ["--system-card-add-border", "primaryColor"],
  ["--system-card-add-icon", "primaryColor"],
];
