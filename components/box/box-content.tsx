import React, { memo } from "react";

interface Props extends React.HTMLAttributes<any> {
  padding?: string | number;
  as?: keyof JSX.IntrinsicElements;
}

export const BoxContent: React.FC<Props> = memo<Props>(
  ({ as = "div", padding = 15, children, ...props }) => {
    if (typeof padding == "number") padding = `${padding}px`;
    const Component = as;

    return (
      <Component className="content" {...props}>
        {children}
        <style jsx>{`
          .content {
            padding: ${padding};
          }
        `}</style>
      </Component>
    );
  }
);
