import React, { useRef, useMemo, memo } from "react";
import { useTheme } from "../styles/use-theme";
import { ButtonTypes, NormalSizes } from "../utils/prop-types";
import { getButtonColors, getButtonSize } from "./styles";
import { Loading } from "../loading";

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: ButtonTypes;
  size?: NormalSizes;
  width?: number | string;
  icon?: React.ReactNode;
  iconRight?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: React.FC<Props> = memo<Props>(
  ({
    type = "default",
    size = "medium",
    onClick,
    className = "",
    width = "auto",
    icon,
    iconRight = false,
    loading = false,
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
        disabled={props.disabled || loading}
        {...props}
      >
        <span className="btn-content">
          {icon}
          {loading ? <Loading /> : children}
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
          border: 1px solid ${colors.border};
          border-radius: ${theme.layout.radius};
          transition: opacity 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          font-family: ${theme.font.sans};
          font-weight: 500;
          outline: none;
          width: ${width};
          height: ${sizes.height};
          min-width: ${sizes.minWidth};
          user-select: none;
          cursor: pointer;
        }

        .btn:disabled {
          background: ${theme.colors.grey1};
          border-color: ${theme.colors.grey2};
          color: ${theme.colors.grey4};
          cursor: not-allowed;
        }

        .btn:hover:enabled {
          opacity: 0.8;
        }

        .btn:active:enabled {
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
