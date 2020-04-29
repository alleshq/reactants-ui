import { ReactantsThemes } from "../styles/themes";
import { InputTypes } from "../utils/prop-types";

export interface InputColorGroup {
  bg: string;
  color: string;
  border: string;
  darkerBorder: string;
}

export const getInputColors = (
  theme: ReactantsThemes,
  type: InputTypes
): InputColorGroup => {
  const colors: { [key in InputTypes]?: InputColorGroup } = {
    default: {
      bg: "none",
      color: theme.palette.foreground,
      border: `${theme.palette.foreground}22`,
      darkerBorder: theme.palette.foreground,
    },
    danger: {
      bg: "none",
      color: theme.palette.foreground,
      border: theme.palette.danger,
      darkerBorder: theme.palette.danger,
    },
  };

  const defaultColor = colors["default"] as InputColorGroup;
  return colors[type] || defaultColor;
};
