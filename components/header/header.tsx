import React, { useRef, useEffect, memo, useState } from "react";
import { useTheme } from "../styles/use-theme";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  logo?: React.ReactNode;
  fixed?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = memo<Props>(
  ({ children, logo, fixed, className = "", ...props }) => {
    const theme = useTheme();
    const headerRef = useRef<HTMLHeadingElement>(null);
    const [shadow, setShadow] = useState<boolean>(false);

    useEffect(() => {
      const scrollHandler = () => {
        const shouldShadow = document.documentElement.scrollTop > 60;
        if (shouldShadow === shadow) return;
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
        <nav>
          <h4 className="header-title">{logo}</h4>
          <div className="header-actions">{children}</div>
        </nav>

        <style jsx>{`
          .header {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            height: 60px;
            background-color: ${theme.colors.background}dd;
            backdrop-filter: saturate(180%) blur(5px);
            border-bottom: 1px solid ${theme.colors.grey2};
            z-index: 999;
            padding: 0 20px;
            box-shadow: none;
            transition: box-shadow 0.2s ease;
          }

          nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1000px;
            margin: 0 auto;
            height: 100%;
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
