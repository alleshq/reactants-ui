import React, { memo } from "react";
import { useTheme } from "../styles/use-theme";
import { BoxHeader } from "./box-header";
import { BoxContent } from "./box-content";

interface Props extends React.HTMLAttributes<any> {
  className?: string;
}

const Box: React.FC<Props> = memo<Props>(
  ({ className = "", children, ...props }) => {
    const theme = useTheme();

    return (
      <div className={`box ${className}`} {...props}>
        {children}
        <style jsx>{`
          .box {
            border: 1px solid ${theme.colors.grey2};
            border-radius: ${theme.layout.radius};
          }
        `}</style>
      </div>
    );
  }
);

type BoxWithOtherComponents = typeof Box & {
  Header: typeof BoxHeader;
  Content: typeof BoxContent;
};

const BoxWithOtherComponents = Box as BoxWithOtherComponents;
export { BoxWithOtherComponents as Box };
