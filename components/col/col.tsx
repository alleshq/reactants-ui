import { memo } from "react";

interface Props extends React.HTMLAttributes<any> {
  span?: number;
  offset?: number;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const Col: React.FC<Props> = memo<Props>(
  ({
    span = 24,
    offset = 0,
    component = "div",
    className = "",
    children,
    ...props
  }) => {
    const Component = component;

    return (
      <Component className={`col ${className}`} {...props}>
        {children}
        <style jsx>{`
          .col {
            float: left;
            box-sizing: border-box;
            padding-left: calc(var(--row-gap) / 2);
            padding-right: calc(var(--row-gap) / 2);
            width: ${(100 / 24) * span}%;
            margin-left: ${(100 / 24) * offset}%;
          }
        `}</style>
      </Component>
    );
  }
);
