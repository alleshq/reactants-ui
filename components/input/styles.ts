import { ReactantsThemes } from "../styles/themes";

export interface InputColorGroup {
  bg: string;
  color: string;
  border: string;
  darkerBorder: string;
}

export const getInputColors = (theme: ReactantsThemes): InputColorGroup => {
  return {
    bg: "none",
    color: theme.palette.foreground,
    border: `${theme.palette.foreground}22`,
    darkerBorder: theme.palette.foreground,
  };
};
