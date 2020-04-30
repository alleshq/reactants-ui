import React, { useRef } from "react";
import useTheme from "../styles/use-theme";
import withDefaults from "../utils/with-defaults";

interface Props {
  className?: string;
}

const defaultProps = {
  className: "",
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type CardProps = Props & typeof defaultProps & NativeAttrs;

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  className,
  ...props
}) => {
  const theme = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className={`card ${className}`} {...props}>
      {children}{" "}
      <style jsx>{`
        .card {
          border: 1px solid ${theme.palette.foreground}22;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default withDefaults(Card, defaultProps);
