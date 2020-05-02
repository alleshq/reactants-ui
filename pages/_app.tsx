import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import {
  ReactantsThemes,
  ReactantsProvider,
  CSSBaseline,
  Button,
  Header,
} from "../components";

const Application: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [customTheme, setCustomTheme] = useState<Partial<ReactantsThemes>>({});
  const themeChangeHandle = (theme: Partial<ReactantsThemes>) => {
    window.localStorage.setItem("theme", theme.type);
    setCustomTheme(theme);
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme !== "dark") return;
    themeChangeHandle({ type: "dark" });
  }, []);

  return (
    <ReactantsProvider theme={customTheme}>
      <CSSBaseline />
      <Header title="Reactants" fixed>
        <Button
          size="small"
          className="toggle"
          onClick={() => {
            themeChangeHandle({
              type: customTheme.type == "dark" ? "light" : "dark",
            });
          }}
        >
          {customTheme.type == "dark" ? "Light" : "Dark"}
        </Button>
      </Header>

      <Component {...pageProps} />
    </ReactantsProvider>
  );
};

export default Application;
