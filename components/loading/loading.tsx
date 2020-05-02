import React, { memo } from "react";
import { useTheme } from "../styles/use-theme";

interface Props extends React.HTMLAttributes<any> {}

export const Loading: React.FC<Props> = memo<Props>(({ ...props }) => {
  const theme = useTheme();

  return (
    <div className="loading-container" {...props}>
      <span className="loading">
        <i />
        <i />
        <i />
      </span>

      <style jsx>{`
        .loading-container {
          display: inline-flex;
          align-items: center;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .loading {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          user-select: none;
        }

        i {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: ${theme.palette.grey6};
          margin: 0 1px;
          display: inline-block;
          animation: loading-blink 1.4s infinite both;
        }

        i:nth-child(2) {
          animation-delay: 0.2s;
        }

        i:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes loading-blink {
          0% {
            opacity: 0.2;
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
});
