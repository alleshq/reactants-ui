import React from "react";
import useTheme from "../use-theme";
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
          background-color: ${theme.palette.background};
          color: ${theme.palette.foreground};
        }

        html {
          font-size: 16px;
          --zeit-icons-background: ${theme.palette.background};
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
          padding: 0;
          min-height: 100%;
          position: relative;
          overflow-x: hidden;
          font-family: ${theme.font.sans};
        }
      `}</style>
    </>
  );
};

type MemoCssBaselineComponent<P = {}> = React.NamedExoticComponent<P> & {
  flush: typeof flushToReact;
};

const MemoCSSBaseline = React.memo(CSSBaseline) as MemoCssBaselineComponent<
  React.PropsWithChildren<{}>
>;
MemoCSSBaseline.flush = flush;

export default MemoCSSBaseline;
