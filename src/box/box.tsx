import React, { memo, HTMLAttributes } from "react";
import styles from "./box.module.css";

type Props = {
  as?: keyof JSX.IntrinsicElements;
};

const Box: React.FC<Props> = memo<Props>(
  ({ children, as = "div", ...props }) => {
    const Component = as;

    return (
      <Component className={styles.box} {...props}>
        {children}
      </Component>
    );
  }
);

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
  padding?: number | string;
} & React.HTMLAttributes<any>;

const BoxContent: React.FC<BoxContentProps> = memo<BoxContentProps>(
  ({ children, padding = 20, ...props }) => {
    return (
      <div {...props} style={{ padding }}>
        {children}
      </div>
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
