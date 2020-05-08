import React, { memo } from "react";
import { useTheme } from "../styles/use-theme";

export const BoxHeader: React.FC = memo(({ children }) => {
  const theme = useTheme();

  return (
    <div className="header">
      {children}
      <style jsx>{`
        .header {
          padding: 10px 15px;
          font-size: 0.9em;
          color: ${theme.colors.grey5};
          background-color: ${theme.colors.grey1};
          border-bottom: 1px solid ${theme.colors.grey2};
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          cursor: default;
        }
      `}</style>
    </div>
  );
});
