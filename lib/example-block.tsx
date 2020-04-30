import React, { useMemo, memo } from "react";
import useTheme from "../components/styles/use-theme";
import { ReactantsThemes } from "../components/styles/themes";

interface Props {
  plain?: number | boolean;
}

const getBackground = (theme: ReactantsThemes, plain: number | boolean) => {
  if (typeof plain !== "number") return theme.palette.primary;

  const colors = [
    theme.palette.grey1,
    theme.palette.grey2,
    theme.palette.grey3,
    theme.palette.grey4,
    theme.palette.grey5,
    theme.palette.grey6,
  ];
  return colors[plain - 1] || theme.palette.primary;
};

const ExampleBlock: React.FC<Props> = memo<Props>(
  ({ plain, children, ...props }) => {
    const theme = useTheme();
    const bg = useMemo(() => getBackground(theme, plain), [theme, plain]);

    return (
      <div className="block" {...props}>
        {children}
        <style jsx>{`
          .block {
            width: 100%;
            background: ${bg};
            padding: ${theme.layout.gapHalf};
            border-radius: ${theme.layout.radius};
            color: ${theme.palette.background};
            font-size: 0.75rem;
          }
        `}</style>
      </div>
    );
  }
);

export default ExampleBlock;
