import React from "react";
import { ReactantsThemes } from "../themes/index";
import defaultTheme from "../themes/default";

const ThemeContext: React.Context<ReactantsThemes> = React.createContext<
  ReactantsThemes
>(defaultTheme);

export default ThemeContext;
