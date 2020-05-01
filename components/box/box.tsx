import React, { useRef, memo } from "react";
import { useTheme } from "../styles/use-theme";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Box: React.FC<BoxProps> = memo<BoxProps>(
  ({ className = "", children, ...props }) => {
    const theme = useTheme();

    return (
      <div className={`box ${className}`} {...props}>
        {children}
        <style jsx>{`
          .box {
            border: 1px solid ${theme.palette.grey2};
            border-radius: ${theme.layout.radius};
          }
        `}</style>
      </div>
    );
  }
);

export const BoxHeader: React.FC = memo(({ children }) => {
  const theme = useTheme();

  return (
    <div className="header">
      {children}
      <style jsx>{`
        .header {
          padding: 10px 15px;
          font-size: 0.9em;
          color: ${theme.palette.grey5};
          background-color: ${theme.palette.grey1};
          border-bottom: 1px solid ${theme.palette.grey2};
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          cursor: default;
        }
      `}</style>
    </div>
  );
});

interface BoxContentProps extends React.HTMLAttributes<any> {
  padding?: string | number;
  as?: keyof JSX.IntrinsicElements;
}

export const BoxContent: React.FC<BoxContentProps> = memo<BoxContentProps>(
  ({ as = "div", padding = 15, children, ...props }) => {
    if (typeof padding == "number") padding = `${padding}px`;
    const Component = as;

    return (
      <Component className="content" {...props}>
        {children}
        <style jsx>{`
          .content {
            padding: ${padding};
          }
        `}</style>
      </Component>
    );
  }
);
