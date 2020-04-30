import React, { memo } from "react";

interface Props extends React.HTMLAttributes<any> {
  x?: number;
  y?: number;
  className?: string;
}

const getMargin = (num: number): string => {
  if (num < 0) {
    console.error('[Spacer]: "x"/"y" must be greater than or equal to 0');
    return "0";
  }
  return `calc(${num * 15.25}pt + 1px * ${num - 1})`;
};

const Spacer: React.FC<Props> = memo<Props>(
  ({ x = 1, y = 1, className = "", ...props }) => {
    const left = getMargin(x);
    const top = getMargin(y);

    return (
      <span className={className} {...props}>
        <style jsx>{`
          span {
            display: block;
            height: 1px;
            width: 1px;
            margin-left: ${left};
            margin-top: ${top};
          }
        `}</style>
      </span>
    );
  }
);

export default Spacer;
