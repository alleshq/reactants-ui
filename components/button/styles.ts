import { ReactantsThemes } from "../styles/themes";
import { ButtonTypes, NormalSizes } from "../utils/prop-types";

export interface ButtonColorGroup {
  bg: string;
  fg: string;
  border: string;
}

export const getButtonColors = (
  theme: ReactantsThemes,
  type: ButtonTypes
): ButtonColorGroup => {
  const colors: { [key in ButtonTypes]?: ButtonColorGroup } = {
    default: {
      bg: "transparent",
      fg: theme.palette.foreground,
      border: theme.palette.grey2,
    },
    primary: {
      bg: theme.palette.primary,
      fg: "#fff",
      border: theme.palette.primary,
    },
    danger: {
      bg: theme.palette.danger,
      fg: "#fff",
      border: theme.palette.danger,
    },
  };

  const defaultColor = colors["primary"] as ButtonColorGroup;
  return colors[type] || defaultColor;
};

export interface ButtonSizeGroup {
  padding: string;
  font: string;
}

export const getButtonSize = (
  size: NormalSizes = "medium"
): ButtonSizeGroup => {
  const defaultLayout = {
    padding: "9.5px 30px",
    font: "0.83em",
  };

  const layouts: { [key in NormalSizes]: ButtonSizeGroup } = {
    small: {
      padding: "5px 20px",
      font: "0.8em",
    },
    medium: defaultLayout,
    large: {
      padding: "11.5px 40px",
      font: "0.925em",
    },
  };

  return layouts[size] || defaultLayout;
};
