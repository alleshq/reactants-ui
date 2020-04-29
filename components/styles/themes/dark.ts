import {
  ReactantsThemesPalette,
  ReactantsFont,
  ReactantsThemes,
} from "./index";

export const palette: ReactantsThemesPalette = {
  background: "#000000",
  foreground: "#ffffff",
  primary: "#23539e",
  danger: "#ff5252",
};

export const font: ReactantsFont = {
  sans: '"Inter", sans-serif',
  mono: '"Jetbrains Mono", monospace',
};

export const themes: ReactantsThemes = {
  palette,
  font,
  type: "dark",
};

export default themes;
