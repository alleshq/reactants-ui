import React, { useRef, useMemo } from "react";
import withDefaults from "../utils/with-defaults";
import useTheme from "../styles/use-theme";
import { ButtonTypes, NormalSizes } from "../utils/prop-types";
import { getButtonColors, getButtonSize } from "./styles";

interface Props {
  type?: ButtonTypes;
  size?: NormalSizes;
  width?: number | string;
  icon?: React.ReactNode;
  iconRight?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const defaultProps = {
  type: "default" as ButtonTypes,
  size: "medium" as NormalSizes,
  width: "auto" as number | string,
  iconRight: false,
  disabled: false,
  className: "",
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export type ButtonProps = Props & typeof defaultProps & NativeAttrs;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  type,
  size,
  onClick,
  className,
  width,
  icon,
  iconRight,
  ...props
}) => {
  const theme = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { bg, color, border } = useMemo(() => getButtonColors(theme, type), [
    theme,
    type,
  ]);
  const { padding, fontSize } = useMemo(() => getButtonSize(size), [size]);

  return (
    <button
      ref={buttonRef}
      className={`btn ${className}`}
      onClick={onClick}
      {...props}
    >
      <span>
        {icon ? icon : ""}
        {children}
      </span>
      <style jsx>{`
        .btn {
          position: relative;
          display: block;
          padding: ${padding};
          font-size: ${fontSize};
          box-sizing: border-box;
          background: ${bg};
          color: ${color};
          cursor: pointer;
          border: 1px solid ${border};
          border-radius: 5px;
          transition: opacity 0.2s ease;
          font-family: ${theme.font.sans};
          font-weight: 500;
          outline: none;
          width: ${width};
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: unset;
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

        .btn span {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 ${!icon ? "0" : "20px"};
        }

        .btn span :global(svg) {
          position: absolute;
          left: ${iconRight ? "unset" : "15px"};
          right: ${iconRight ? "15px" : "unset"};
          height: 15px;
          width: 15px;
          margin-${iconRight ? "left" : "right"}: 10px;
          opacity: 0.5;
        }
      `}</style>
    </button>
  );
};

const MemoButton = React.memo<React.PropsWithChildren<ButtonProps>>(Button);

export default withDefaults(MemoButton, defaultProps);
