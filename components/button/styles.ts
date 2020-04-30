import { ReactantsThemes } from "../styles/themes";
import { ButtonTypes, NormalSizes } from "../utils/prop-types";

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
      bg: "transparent",
      color: theme.palette.foreground,
      border: theme.palette.grey2,
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

export interface ButtonSizeGroup {
  padding: string;
  fontSize: string;
}

export const getButtonSize = (
  size: NormalSizes = "medium"
): ButtonSizeGroup => {
  const defaultLayout = {
    padding: "7.5px 30px",
    fontSize: "0.83em",
  };

  const layouts: { [key in NormalSizes]: ButtonSizeGroup } = {
    small: {
      padding: "5px 20px",
      fontSize: "0.8em",
    },
    medium: defaultLayout,
    large: {
      padding: "11.5px 40px",
      fontSize: "0.925em",
    },
  };

  return layouts[size] || defaultLayout;
};
