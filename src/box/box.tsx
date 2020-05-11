import React, { memo, HTMLAttributes } from "react";
import styles from "./box.module.css";

const Box: React.FC = memo(({ children, ...props }) => {
  return (
    <div className={styles.box} {...props}>
      {children}
    </div>
  );
});

const BoxHeader: React.FC<HTMLAttributes<any>> = memo<HTMLAttributes<any>>(
  ({ children, ...props }) => {
    return (
      <div className={styles.header} {...props}>
        {children}
      </div>
    );
  }
);

const BoxFooter: React.FC<HTMLAttributes<any>> = memo<HTMLAttributes<any>>(
  ({ children, ...props }) => {
    return (
      <div className={styles.footer} {...props}>
        {children}
      </div>
    );
  }
);

type BoxContentProps = {
  as?: keyof JSX.IntrinsicElements;
  padding?: number | string;
} & React.HTMLAttributes<any>;

const BoxContent: React.FC<BoxContentProps> = memo<BoxContentProps>(
  ({ as = "div", children, padding = 20, ...props }) => {
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
  Footer: typeof BoxFooter;
};

BoxWithSubcomponents.Header = BoxHeader;
BoxWithSubcomponents.Content = BoxContent;
BoxWithSubcomponents.Footer = BoxFooter;

export { BoxWithSubcomponents as Box };
