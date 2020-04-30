import { ReactantsThemes } from "../styles/themes";

export interface InputColorGroup {
  bg: string;
  fg: string;
  border: string;
  darkerBorder: string;
}

export const getInputColors = (
  theme: ReactantsThemes,
  errored: boolean
): InputColorGroup => {
  return errored
    ? {
        bg: "transparent",
        fg: theme.palette.foreground,
        border: theme.palette.danger,
        darkerBorder: theme.palette.danger,
      }
    : {
        bg: "transparent",
        fg: theme.palette.foreground,
        border: theme.palette.grey2,
        darkerBorder: theme.palette.grey5,
      };
};
