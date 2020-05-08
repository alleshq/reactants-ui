import { ThemeTypes } from "../../utils/prop-types";

export interface ReactantsThemesColors {
  background: string;
  foreground: string;
  primary: string;
  danger: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  grey6: string;
  grey7: string;
  grey8: string;
}

export interface ReactantsLayout {
  gap: string;
  gapHalf: string;
  radius: string;
}

export interface ReactantsFont {
  sans: string;
  mono: string;
}

export interface ReactantsThemes {
  colors: ReactantsThemesColors;
  layout: ReactantsLayout;
  font: ReactantsFont;
  type: ThemeTypes;
}
