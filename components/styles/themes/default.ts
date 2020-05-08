import {
  ReactantsThemesColors,
  ReactantsFont,
  ReactantsThemes,
  ReactantsLayout,
} from "./index";

export const colors: ReactantsThemesColors = {
  background: "#ffffff",
  foreground: "#000000",
  primary: "#23539e",
  danger: "#ff5252",
  grey1: "#fafafa",
  grey2: "#eaeaea",
  grey3: "#999",
  grey4: "#888",
  grey5: "#666",
  grey6: "#444",
  grey7: "#333",
  grey8: "#111",
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
  font,
  layout,
  type: "light",
};

export default themes;
