import { useState, useEffect } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import {
  ReactantsThemes,
  ReactantsProvider,
  useTheme,
  CSSBaseline,
  Button,
} from "../components";

const Application: NextPage<AppProps> = ({ Component, pageProps }) => {
  const theme = useTheme();
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
      <div style={{ position: "fixed", top: 25, left: 25 }}>
        <Button
          size="small"
          className="toggle"
          onClick={() => {
            themeChangeHandle({
              type: customTheme.type == "dark" ? "light" : "dark",
            });
          }}
        >
          {customTheme.type == "light" ? "Dark" : "Light"}
        </Button>
      </div>
      <Component {...pageProps} />
    </ReactantsProvider>
  );
};

export default Application;
