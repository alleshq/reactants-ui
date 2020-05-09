import { ReactantsThemes } from "../styles/themes";
import {
  ButtonKinds,
  NormalSizes,
  ButtonImportance,
} from "../utils/prop-types";

export interface ButtonColorGroup {
  bg: string;
  fg: string;
  border: string;
}

export const getButtonColors = (
  theme: ReactantsThemes,
  type: ButtonKinds,
  importance: ButtonImportance
): ButtonColorGroup => {
  const colors: {
    [key in ButtonKinds]: { [key in ButtonImportance]: ButtonColorGroup };
  } = {
    default: {
      low: {
        bg: theme.colors.grey2,
        fg: theme.colors.grey6,
        border: theme.colors.grey2,
      },
      medium: {
        bg: theme.colors.grey2,
        fg: theme.colors.grey6,
        border: theme.colors.grey2,
      },
      high: {
        bg: theme.colors.grey6,
        fg: "#fff",
        border: theme.colors.grey6,
      },
    },
    primary: {
      high: {
        bg: theme.colors.primary,
        fg: "#fff",
        border: theme.colors.primary,
      },
      medium: {
        bg: `${theme.colors.primary}11`,
        fg: theme.colors.primary,
        border: "transparent",
      },
      low: {
        bg: `${theme.colors.primary}11`,
        fg: theme.colors.primary,
        border: "transparent",
      },
    },
    danger: {
      high: {
        bg: theme.colors.danger,
        fg: "#fff",
        border: theme.colors.danger,
      },
      medium: {
        bg: `${theme.colors.danger}11`,
        fg: theme.colors.danger,
        border: `${theme.colors.danger}11`,
      },
      low: {
        bg: `${theme.colors.danger}11`,
        fg: theme.colors.danger,
        border: "transparent",
      },
    },
  };

  const defaultColor = colors["primary"]["high"] as ButtonColorGroup;
  return colors[type][importance] || defaultColor;
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
