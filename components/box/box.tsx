import React, { memo } from "react";
import styles from "./box.module.css";

const Box: React.FC = memo(({ children, ...props }) => {
  return (
    <div className={styles.box} {...props}>
      {children}
    </div>
  );
});

const BoxHeader: React.FC = memo(({ children }) => {
  return <div className={styles.header}>{children}</div>;
});

type BoxContentProps = {
  as?: keyof JSX.IntrinsicElements;
  padding?: number | string;
} & React.HTMLAttributes<any>;

const BoxContent: React.FC<BoxContentProps> = memo<BoxContentProps>(
  ({ as = "div", children, padding = 15, ...props }) => {
    const Component = as;
    return (
      <Component {...props} style={{ padding }}>
        {children}
      </Component>
    );
  }
);

const BoxWithSubcomponents = Box as typeof Box & {
  Header: typeof BoxHeader;
  Content: typeof BoxContent;
};

BoxWithSubcomponents.Header = BoxHeader;
BoxWithSubcomponents.Content = BoxContent;

export { BoxWithSubcomponents as Box };
