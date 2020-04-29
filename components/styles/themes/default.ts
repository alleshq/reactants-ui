import {
  ReactantsThemesPalette,
  ReactantsFont,
  ReactantsThemes,
} from "./index";

export const palette: ReactantsThemesPalette = {
  background: "#ffffff",
  foreground: "#000000",
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
  type: "light",
};

export default themes;
