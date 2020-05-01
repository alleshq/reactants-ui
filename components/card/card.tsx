import React, { useRef, memo } from "react";
import { useTheme } from "../styles/use-theme";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  header?: string | React.ReactNode;
  className?: string;
}

export const Card: React.FC<Props> = memo<Props>(
  ({ header, className = "", children, ...props }) => {
    const theme = useTheme();
    const cardRef = useRef<HTMLDivElement>(null);

    return (
      <div ref={cardRef} className={`card ${className}`} {...props}>
        {header && <div className="card-header">{header}</div>}

        <div className="card-content">{children}</div>

        <style jsx>{`
          .card {
            border: 1px solid ${theme.palette.grey2};
            border-radius: ${theme.layout.radius};
          }

          .card-header {
            background-color: ${theme.palette.grey1};
            border-bottom: 1px solid ${theme.palette.grey2};
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            color: ${theme.palette.grey5};
            padding: 10px 15px;
            font-size: 0.9em;
            font-weight: 400;
            cursor: default;
          }

          .card-content {
            padding: 25px;
          }
        `}</style>
      </div>
    );
  }
);
