import {
  ReactantsThemesPalette,
  ReactantsFont,
  ReactantsThemes,
} from "./index";

export const palette: ReactantsThemesPalette = {
  background: "#ffffff",
  foreground: "#000000",
  primary: "#23539e",
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
