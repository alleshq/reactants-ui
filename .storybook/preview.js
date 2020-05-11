import "../src/global.css";
import React, { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, setTheme } from "../src";

// create a component that uses the dark mode hook
const ThemeWrapper = ({ children }) => {
  const isDark = useDarkMode();

  useEffect(() => {
    setTheme(isDark ? "dark" : "light");
  }, [isDark]);

  return <ThemeProvider>{children}</ThemeProvider>;
};

addDecorator((renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>);
