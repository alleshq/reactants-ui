import React, { memo, forwardRef } from "react";
import styles from "./breadcrumb.module.css";

const Breadcrumb: React.FC = memo(({ children }) => {
  return (
    <div className={styles.breadcrumb}>
      {React.Children.map(children, (child, i) => (
        <>
          {i != 0 && <span className={styles.divider}></span>}
          {child}
        </>
      ))}
    </div>
  );
});

interface Props {
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  text?: string;
}

export const BreadcrumbItem: React.FC<Props> = memo<Props>(
  forwardRef<any, Props>(
    ({ children, as = "span", text, href, ...props }, ref) => {
      const Component = as;

      return (
        <div className={styles.item}>
          <Component style={{ margin: 0, padding: 0 }} {...props}>
            {href ? (
              <a className={styles.a} href={href} ref={ref}>
                {text || children}
              </a>
            ) : (
              text || children
            )}
          </Component>
        </div>
      );
    }
  )
);

type BreadcrumbWithSubcomponents = typeof Breadcrumb & {
  Item: typeof BreadcrumbItem;
};

const BreadcrumbWithSubcomponents = Breadcrumb as BreadcrumbWithSubcomponents;
BreadcrumbWithSubcomponents.Item = BreadcrumbItem;

export { BreadcrumbWithSubcomponents as Breadcrumb };
