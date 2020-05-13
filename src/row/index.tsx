import React, { memo, useMemo } from "react";
import styles from "./row.module.css";

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

export const Row: React.FC<Props> = memo<Props>(
  ({
    gap = 0,
    justify = "start",
    align = "top",
    component = "div",
    children,
    style,
    ...props
  }) => {
    const Component = component;
    const { justifyValue, alignValue } = useMemo(
      () => getFlexAlignment(justify, align),
      [justify, align]
    );

    return (
      <Component
        className={styles.row}
        style={
          {
            ...{
              marginLeft: `calc(${gap} * var(--gap) / 2)`,
              marginRight: `calc(${gap} * var(--gap) / 2)`,
              "--row-gap": `calc(${gap} * var(--gap))`,
              justifyContent: justifyValue,
              alignItems: alignValue,
            },
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </Component>
    );
  }
);
