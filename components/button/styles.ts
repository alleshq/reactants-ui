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
      fg: theme.palette.grey5,
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
  height: string;
  minWidth: string;
}

export const getButtonSize = (
  size: NormalSizes = "medium"
): ButtonSizeGroup => {
  const defaultLayout = {
    padding: "0 30px",
    font: "0.83em",
    height: "2.5rem",
    minWidth: "8rem",
  };

  const layouts: { [key in NormalSizes]: ButtonSizeGroup } = {
    small: {
      padding: "0 20px",
      font: "0.8em",
      height: "1.5rem",
      minWidth: "4rem",
    },
    medium: defaultLayout,
    large: {
      padding: "0 40px",
      font: "0.925em",
      height: "3rem",
      minWidth: "12rem",
    },
  };

  return layouts[size] || defaultLayout;
};
