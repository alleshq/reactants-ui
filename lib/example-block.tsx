import React, { useMemo, memo } from "react";
import { useTheme } from "../components/styles/use-theme";
import { ReactantsThemes } from "../components/styles/themes";

interface Props {
  plain?: number | boolean;
}

const getBackground = (theme: ReactantsThemes, plain: number | boolean) => {
  if (typeof plain !== "number") return theme.colors.primary;

  const colors = [
    theme.colors.grey1,
    theme.colors.grey2,
    theme.colors.grey3,
    theme.colors.grey4,
    theme.colors.grey5,
    theme.colors.grey6,
  ];
  return colors[plain - 1] || theme.colors.primary;
};

const ExampleBlock: React.FC<Props> = memo<Props>(
  ({ plain = false, children, ...props }) => {
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
            color: ${theme.colors.background};
            font-size: 0.75rem;
          }
        `}</style>
      </div>
    );
  }
);

export default ExampleBlock;
