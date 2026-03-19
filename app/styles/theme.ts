import { palette } from "./palette";

export const cssVars = {
  gold: "var(--color-gold)",
  dark: "var(--color-dark)",
  dark2: "var(--color-dark-2)",
  emerald: "var(--color-emerald)",
  offWhite: "var(--color-off-white)",
  borderSubtle: "var(--color-border-subtle)",
  pink: "var(--color-pink)",
  fontSans: "var(--font-sans)",
} as const;

export const mermaidThemeVariables = {
  background: "transparent",
  fontFamily: palette.fontSans,
  primaryColor: palette.dark2,
  primaryTextColor: palette.offWhite,
  primaryBorderColor: palette.gold,
  lineColor: palette.offWhite,
  secondaryColor: palette.dark,
  tertiaryColor: palette.emerald,
} as const;
