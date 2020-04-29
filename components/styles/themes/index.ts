import { ThemeTypes } from "../../utils/prop-types";

export interface ReactantsThemesPalette {
  background: string;
  foreground: string;
  primary: string;
  danger: string;
}

export interface ReactantsFont {
  sans: string;
  mono: string;
}

export interface ReactantsThemes {
  palette: ReactantsThemesPalette;
  font: ReactantsFont;
  type: ThemeTypes;
}
