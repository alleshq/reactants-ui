import React, { memo } from "react";
import { BreadcrumbItem } from "./breadcrumb-item";

const Breadcrumb: React.FC = memo(({ children }) => {
  return (
    <div>
      {children &&
        React.Children.map(children, (child, i) => (
          <span>
            {child && i != 0 && <span className="divider"></span>}
            {child}
          </span>
        ))}

      <style jsx>{`
        span {
          display: inline-flex;
          align-items: center;
        }

        .divider {
          opacity: 0.6;
          display: inline-block;
          height: 16px;
          margin: 0 10px -2px;
          width: 8px;
          user-select: none;
          pointer-events: none;
          background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjUgMTUuNWw3LTE1IiBzdHJva2U9IiNDOEM4QzgiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvc3ZnPg==);
        }
      `}</style>
    </div>
  );
});

type BreadcrumbWithOtherComponents = typeof Breadcrumb & {
  Item: typeof BreadcrumbItem;
};

const BreadcrumbWithOtherComponents = Breadcrumb as BreadcrumbWithOtherComponents;
export { BreadcrumbWithOtherComponents as Breadcrumb };
