import {
  ReactantsThemesColors,
  ReactantsFont,
  ReactantsThemes,
  ReactantsLayout,
} from "./index";

export const colors: ReactantsThemesColors = {
  background: "#000000",
  foreground: "#ffffff",
  primary: "#23539e",
  danger: "#ff5252",
  grey1: "#111",
  grey2: "#333",
  grey3: "#444",
  grey4: "#666",
  grey5: "#888",
  grey6: "#999",
  grey7: "#eaeaea",
  grey8: "#fafafa",
};

export const layout: ReactantsLayout = {
  gap: "16pt",
  gapHalf: "8pt",
  radius: "5px",
};

export const font: ReactantsFont = {
  sans: '"Inter", sans-serif',
  mono: '"Jetbrains Mono", monospace',
};

export const themes: ReactantsThemes = {
  colors,
  layout,
  font,
  type: "dark",
};

export default themes;
