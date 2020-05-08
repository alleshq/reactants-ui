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
        fg: theme.colors.foreground,
        border: theme.colors.danger,
        darkerBorder: theme.colors.danger,
      }
    : {
        bg: "transparent",
        fg: theme.colors.foreground,
        border: theme.colors.grey2,
        darkerBorder: theme.colors.grey5,
      };
};
