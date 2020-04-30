import React, { useRef } from "react";
import useTheme from "../styles/use-theme";
import withDefaults from "../utils/with-defaults";

interface Props {
  header?: string;
  className?: string;
}

const defaultProps = {
  header: "",
  className: "",
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type CardProps = Props & typeof defaultProps & NativeAttrs;

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  header,
  className,
  ...props
}) => {
  const theme = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className={`card ${className}`} {...props}>
      {header && <div className="header">{header}</div>}
      <div className="content">{children}</div>
      <style jsx>{`
        .card {
          border: 1px solid ${theme.palette.foreground}22;
          border-radius: 5px;
        }

        .header {
          background: ${theme.palette.foreground}05;
          border-bottom: 1px solid ${theme.palette.foreground}22;
          color: ${theme.palette.foreground}99;
          width: calc(100% - 30px);
          padding: 10px 15px;
          font-size: 0.9em;
          font-weight: 400;
        }

        .content {
          padding: 25px;
          width: calc(100% - 50px);
        }
      `}</style>
    </div>
  );
};

export default withDefaults(Card, defaultProps);
