import React, { useRef, useMemo, memo } from "react";
import useTheme from "../styles/use-theme";
import { ButtonTypes, NormalSizes } from "../utils/prop-types";
import { getButtonColors, getButtonSize } from "./styles";

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: ButtonTypes;
  size?: NormalSizes;
  width?: number | string;
  icon?: React.ReactNode;
  iconRight?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<Props> = memo<Props>(
  ({
    type = "default",
    size = "medium",
    onClick,
    className = "",
    width = "auto",
    icon,
    iconRight = false,
    children,
    ...props
  }) => {
    const theme = useTheme();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const colors = useMemo(() => getButtonColors(theme, type), [theme, type]);
    const sizes = useMemo(() => getButtonSize(size), [size]);
    if (typeof width == "number") width = `${width}px`;

    return (
      <button
        ref={buttonRef}
        className={`btn ${className}`}
        onClick={onClick}
        {...props}
      >
        <span className="btn-content">
          {icon}
          {children}
        </span>

        <style jsx>{`
        .btn {
          position: relative;
          display: block;
          padding: ${sizes.padding};
          font-size: ${sizes.font};
          box-sizing: border-box;
          background-color: ${colors.bg};
          color: ${colors.fg};
          cursor: pointer;
          border: 1px solid ${colors.border};
          border-radius: ${theme.layout.radius};
          transition: opacity 0.2s ease;
          font-family: ${theme.font.sans};
          font-weight: 500;
          outline: none;
          width: ${width};
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: unset;
          pointer-events: none;
        }

        .btn:hover {
          opacity: 0.8;
        }

        .btn:active {
          opacity: 0.5;
        }

        .btn::-moz-focus-inner {
          border: 0;
        }

        .btn-content {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 ${!icon ? "0" : "20px"};
          width: 100%;
        }

        .btn-content :global(svg) {
          position: absolute;
          left: ${iconRight ? "unset" : "15px"};
          right: ${iconRight ? "15px" : "unset"};
          margin-${iconRight ? "left" : "right"}: 10px;
          height: 15px;
          width: 15px;
          opacity: 0.7;
        }
      `}</style>
      </button>
    );
  }
);

export default Button;
