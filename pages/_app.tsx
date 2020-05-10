import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Header, Breadcrumb, Input } from "../components";
import "../components/styles/global.css";
import { Search } from "react-feather";

const Application: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    if (theme == "dark") document.documentElement.classList.add("dark-mode");
    else document.documentElement.classList.remove("dark-mode");
  }, [theme]);

  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? "light";
    setTheme(theme as "light" | "dark");
  });

  return (
    <>
      <Header>
        <Breadcrumb>
          <Link href="/" passHref>
            <Breadcrumb.Item as="h4" text="Reactants" />
          </Link>

          {router.pathname
            .split("/")
            .filter((path) => path != "")
            .map((path, i) => (
              <Breadcrumb.Item
                key={i}
                text={path.charAt(0).toUpperCase() + path.slice(1)}
              />
            ))}
        </Breadcrumb>

        <Input icon={<Search />} placeholder="Search" />

        <Button
          small
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        >
          {theme.charAt(0).toUpperCase() + theme.substr(1)}
        </Button>
      </Header>

      <Component {...pageProps} />
    </>
  );
};

export default Application;
