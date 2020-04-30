import React, { memo, useMemo } from "react";
import useTheme from "../styles/use-theme";

type Justify = "start" | "end" | "center" | "space-around" | "space-between";
type Align = "top" | "middle" | "bottom";

interface Props extends React.HTMLAttributes<any> {
  gap?: number;
  justify?: Justify;
  align?: Align;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}

const getFlexAlignment = (justify: Justify, align: Align) => {
  const flexJustifyMap: { [key in Justify]?: string } = {
    end: "flex-end",
    center: "center",
    "space-around": "space-around",
    "space-between": "space-between",
  };
  const flexAlignMap: { [key in Align]?: string } = {
    middle: "center",
    bottom: "flex-end",
  };
  return {
    justifyValue: flexJustifyMap[justify] || "normal",
    alignValue: flexAlignMap[align] || "normal",
  };
};

const Row: React.FC<Props> = memo<Props>(
  ({
    gap = 0,
    justify = "start",
    align = "top",
    component = "div",
    className = "",
    children,
    ...props
  }) => {
    const Component = component;
    const theme = useTheme();
    const { justifyValue, alignValue } = useMemo(
      () => getFlexAlignment(justify, align),
      [justify, align]
    );

    return (
      <Component className={`row ${className}`} {...props}>
        {children}
        <style jsx>{`
          .row {
            display: flex;
            position: relative;
            box-sizing: border-box;
            margin-left: calc(${gap} * ${theme.layout.gap} / 2);
            margin-right: calc(${gap} * ${theme.layout.gap} / 2);
            --row-gap: calc(${gap} * ${theme.layout.gap});
            justify-content: ${justifyValue};
            align-items: ${alignValue};
          }
        `}</style>
      </Component>
    );
  }
);

export default Row;
