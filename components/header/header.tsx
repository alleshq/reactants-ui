import React, { useRef, useEffect, useState } from "react";
import cn from "classnames";
import useTheme from "../styles/use-theme";
import withDefaults from "../utils/with-defaults";

interface Props {
  title?: string;
  fixed?: boolean;
  className?: string;
}

const defaultProps = {
  title: "Reactants",
  fixed: false,
  className: "",
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type HeaderProps = Props & typeof defaultProps & NativeAttrs;

const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  children,
  title,
  fixed,
  className,
  ...props
}) => {
  const { palette, type } = useTheme();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [shadow, setShadow] = useState<boolean>(false);

  const onScroll = () => {
    if (headerRef.current) {
      setShadow(
        document.documentElement.scrollTop > headerRef.current.clientHeight
      );
    }
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [type]);

  return (
    <header
      ref={headerRef}
      className={`header ${className} ${cn({ shadow, fixed })}`}
      {...props}
    >
      <h4>{title}</h4>
      <div>{children}</div>

      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 55px;
          background-color: ${palette.background};
          border-bottom: 1px solid ${palette.grey2};
          z-index: 999;
          padding: 0 20px;
          box-shadow: none;
          transition: box-shadow 0.2s ease;
        }

        .header.shadow {
          box-shadow: ${type == "light" &&
          "rgba(0, 0, 0, 0.1) 0px 0px 15px 0px"};
        }

        .header.fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
        }

        h4 {
          margin: 0;
        }

        div {
          float: right;
        }
      `}</style>
    </header>
  );
};

export default withDefaults(Header, defaultProps);
