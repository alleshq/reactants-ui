import React from "react";
import ThemeContext from "./theme-context";
import { ReactantsThemes } from "../themes/index";

const useTheme = (): ReactantsThemes =>
  React.useContext<ReactantsThemes>(ThemeContext);

export default useTheme;
