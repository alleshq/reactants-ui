import { ReactantsThemes } from "../styles/themes";
import { ButtonTypes } from "../utils/prop-types";

export interface ButtonColorGroup {
  bg: string;
  color: string;
  border: string;
}

export const getButtonColors = (
  theme: ReactantsThemes,
  type: ButtonTypes
): ButtonColorGroup => {
  const colors: { [key in ButtonTypes]?: ButtonColorGroup } = {
    default: {
      bg: "none",
      color: theme.palette.foreground,
      border: `${theme.palette.foreground}22`,
    },
    primary: {
      bg: theme.palette.primary,
      color: "#fff",
      border: theme.palette.primary,
    },
    danger: {
      bg: theme.palette.danger,
      color: "#fff",
      border: theme.palette.danger,
    },
  };

  const defaultColor = colors["primary"] as ButtonColorGroup;
  return colors[type] || defaultColor;
};
