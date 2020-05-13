import "../src/global.css";
import React, { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { addDecorator } from "@storybook/react";
import { useTheme } from "../src";

// create a component that uses the dark mode hook
const ThemeWrapper = ({ children }) => {
  const isDark = useDarkMode();
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(isDark ? "dark" : "light");
  }, [isDark]);

  return children;
};

addDecorator((renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>);
