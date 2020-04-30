import React, { useRef, useEffect, memo } from "react";
import useTheme from "../styles/use-theme";
import useCurrentState from "../utils/use-current-state";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  title?: string;
  fixed?: boolean;
  className?: string;
}

const Header: React.FC<Props> = memo<Props>(
  ({ children, title, fixed, className = "", ...props }) => {
    const theme = useTheme();
    const headerRef = useRef<HTMLHeadingElement>(null);
    const [shadow, setShadow, shadowRef] = useCurrentState<boolean>(false);

    useEffect(() => {
      const scrollHandler = () => {
        const shouldShadow = document.documentElement.scrollTop > 60;
        if (shouldShadow === shadowRef.current) return;
        setShadow(shouldShadow);
      };

      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    const extraClasses = `${fixed && "fixed"} ${shadow ? "shadow" : ""}`;

    return (
      <header
        ref={headerRef}
        className={`header ${className} ${extraClasses}`}
        {...props}
      >
        <h4 className="header-title">{title}</h4>
        <div className="header-actions">{children}</div>

        <style jsx>{`
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 60px;
            background-color: ${theme.palette.background};
            border-bottom: 1px solid ${theme.palette.grey2};
            z-index: 999;
            padding: 0 20px;
            box-shadow: none;
            transition: box-shadow 0.2s ease;
          }

          .header.shadow {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 15px 0;
          }

          .header.fixed {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
          }

          .header-title {
            margin: 0;
          }

          .header-actions {
            float: right;
          }
        `}</style>
      </header>
    );
  }
);

export default Header;
