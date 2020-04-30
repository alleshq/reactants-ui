import { ReactantsThemes } from "../styles/themes";

export interface InputColorGroup {
  bg: string;
  color: string;
  border: string;
  darkerBorder: string;
}

export const getInputColors = (
  theme: ReactantsThemes,
  errored: boolean
): InputColorGroup => {
  return errored
    ? {
        bg: "none",
        color: theme.palette.foreground,
        border: theme.palette.danger,
        darkerBorder: theme.palette.danger,
      }
    : {
        bg: "none",
        color: theme.palette.foreground,
        border: theme.palette.grey2,
        darkerBorder: theme.palette.foreground,
      };
};
