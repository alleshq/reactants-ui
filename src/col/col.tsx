import React, { memo } from "react";
import styles from "./col.module.css";

interface Props extends React.HTMLAttributes<any> {
  span?: number;
  offset?: number;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const Col: React.FC<Props> = memo<Props>(
  ({ span = 24, offset = 0, component = "div", children, ...props }) => {
    const Component = component;

    return (
      <Component
        className={styles.col}
        style={{
          width: `${(100 / 24) * span}%`,
          marginLeft: `${(100 / 24) * offset}%`,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
