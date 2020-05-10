import React from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  Header,
  Breadcrumb,
  Input,
  withTheme,
  useTheme,
  setTheme,
} from "../components";
import "../components/global.css";
import { Search } from "react-feather";

const Application: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const theme = useTheme();

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

        <div style={{ width: 100 }}>
          <Button
            small
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
        </div>
      </Header>

      <Component {...pageProps} />
    </>
  );
};

export default withTheme(Application);
