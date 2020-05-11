import Head from "next/head";
import React, { useContext, useState, useEffect } from "react";
import { getTheme, Theme } from "./dark-mode";

export const ThemeContext = React.createContext<Theme>("light");
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());
  const [loaded, setLoaded] = useState(false);

  const onStorage = (event: StorageEvent) => {
    if (event.key !== "reactants-theme") return;
    const value = event.newValue ?? "light";
    if (value !== theme) {
      setTheme(value as Theme);
    }
  };

  useEffect(() => {
    setLoaded(true);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </Head>
      {loaded && children}
    </ThemeContext.Provider>
  );
};

const darkModeScript = `
try {
  var query = window.matchMedia("(prefers-color-scheme: dark)");
  var preference = window.localStorage.getItem("reactants-theme");

  if (preference) {
    if ((preference === "system" && query.matches) || preference === "dark") {
      document.documentElement.classList.add("dark-mode");
    }
  }
} catch (e) {}
`;
