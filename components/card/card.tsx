import React, { useRef } from "react";
import useTheme from "../styles/use-theme";
import withDefaults from "../utils/with-defaults";

interface Props {
  header?: string | React.ReactNode;
  className?: string;
}

const defaultProps = {
  header: "" as string | React.ReactNode,
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
  const { palette } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className={`card ${className}`} {...props}>
      {header && <div className="header">{header}</div>}
      <div className="content">{children}</div>
      <style jsx>{`
        .card {
          border: 1px solid ${palette.grey2};
          border-radius: 5px;
        }

        .header {
          background-color: ${palette.grey1};
          border-bottom: 1px solid ${palette.grey2};
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          color: ${palette.grey5};
          width: calc(100% - 30px);
          padding: 10px 15px;
          font-size: 0.9em;
          font-weight: 400;
          cursor: default;
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
