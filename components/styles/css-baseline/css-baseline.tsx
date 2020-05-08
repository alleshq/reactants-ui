import React from "react";
import { useTheme } from "../use-theme";
import flush from "styled-jsx/server";
import flushToReact from "styled-jsx/server";

const CSSBaseline: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      {children}
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap");

        html,
        body {
          background-color: ${theme.colors.background};
          color: ${theme.colors.foreground};
        }

        html,
        body,
        #__next {
          height: 100%;
        }

        html {
          font-size: 16px;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
          padding: 0;
          position: relative;
          overflow-x: hidden;
          font-family: ${theme.font.sans};
        }

        h1 {
          font-size: 3rem;
          letter-spacing: -0.066875rem;
          line-height: 1.5;
          font-weight: 700;
        }

        h2 {
          font-size: 2.25rem;
          letter-spacing: -0.020625rem;
          font-weight: 600;
        }

        h3 {
          font-size: 1.5rem;
          letter-spacing: -0.029375rem;
          font-weight: 600;
        }

        h4 {
          font-size: 1.25rem;
          letter-spacing: -0.020625rem;
          font-weight: 600;
        }

        h5 {
          font-size: 1rem;
          letter-spacing: -0.01125rem;
          font-weight: 600;
        }

        h6 {
          font-size: 0.875rem;
          letter-spacing: -0.005625rem;
          font-weight: 600;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
          text-rendering: geometricPrecision;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  );
};

type MemoCssBaselineComponent<P = {}> = React.NamedExoticComponent<P> & {
  flush: typeof flushToReact;
};

export const MemoCSSBaseline = React.memo(
  CSSBaseline
) as MemoCssBaselineComponent<React.PropsWithChildren<{}>>;
MemoCSSBaseline.flush = flush;
