import React, { useContext } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { getTheme, Theme } from "./dark-mode";

export const ThemeContext = React.createContext<Theme>("light");
export const useTheme = () => useContext(ThemeContext);

export const withTheme = (Component: any) => {
  return class WithDarkMode extends React.Component {
    static getInitialProps = Component.getInitialProps;

    static childContextTypes = {
      theme: PropTypes.string,
    };

    // dark mode was enabled in localStorage
    state = {
      theme: getTheme(),
      loaded: false,
    };

    getChildContext() {
      return {
        theme: this.state.theme,
      };
    }

    componentDidMount() {
      this.setState((state) => ({ ...state, loaded: true }));
      window.addEventListener("storage", this.onStorage);
      window.addEventListener("reactants-theme", this.onStorage);
    }

    componentWillUnmount() {
      window.removeEventListener("storage", this.onStorage);
      window.removeEventListener("reactants-theme", this.onStorage);
    }

    onStorage = (event: any) => {
      if (event.key !== "reactants-theme") return;
      const value = event.newValue;
      if (value !== this.state.theme) {
        this.setState({ theme: value });
      }
    };

    render() {
      const value = this.state.theme;

      return (
        <ThemeContext.Provider value={value}>
          <Head>
            <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
          </Head>

          {this.state.loaded && <Component {...this.props} />}
        </ThemeContext.Provider>
      );
    }
  };
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
