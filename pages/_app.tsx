import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ReactantsThemes,
  ReactantsProvider,
  Button,
  Header,
  Breadcrumb,
} from "../components";
import "../components/styles/global.css";

const Application: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [customTheme, setCustomTheme] = useState<Partial<ReactantsThemes>>({});
  const router = useRouter();

  const themeChangeHandle = (theme: Partial<ReactantsThemes>) => {
    window.localStorage.setItem("theme", theme.type ?? "light");
    if (theme.type == "dark")
      document.documentElement.classList.add("dark-mode");
    else document.documentElement.classList.remove("dark-mode");
    setCustomTheme(theme);
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme !== "dark") return;
    themeChangeHandle({ type: "dark" });
  }, []);

  return (
    <ReactantsProvider theme={customTheme}>
      <Header>
        <Breadcrumb>
          <Link href="/" passHref>
            <Breadcrumb.Item>
              <h4 style={{ display: "inline" }}>Reactants</h4>
            </Breadcrumb.Item>
          </Link>

          {router.pathname.includes("login") && (
            <Breadcrumb.Item>Login</Breadcrumb.Item>
          )}
        </Breadcrumb>
        <Button
          small
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
