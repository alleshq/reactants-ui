import React, { useRef, useMemo } from "react";
import withDefaults from "../utils/with-defaults";
import useTheme from "../styles/use-theme";
import { ButtonTypes } from "../utils/prop-types";
import { getButtonColors } from "./styles";

interface Props {
  type: ButtonTypes;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
}

const defaultProps = {
  type: "default" as ButtonTypes,
  disabled: false,
  className: "",
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export type ButtonProps = Props & typeof defaultProps & NativeAttrs;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  type,
  onClick,
  className,
  ...props
}) => {
  const theme = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { bg, color, border } = useMemo(() => getButtonColors(theme, type), [
    theme,
    type,
  ]);

  return (
    <button
      ref={buttonRef}
      className={`btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      <style jsx>{`
        .btn {
          display: block;
          padding: 9px 17px;
          font-size: 0.875em;
          box-sizing: border-box;
          background: ${bg};
          color: ${color};
          cursor: pointer;
          border: 1px solid ${border};
          border-radius: 5px;
          transition: all 0.2s ease;
          font-family: ${theme.font.sans};
          font-weight: 500;
          outline: none;
        }

        .btn:disabled {
          opacity: 0.4;
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
      `}</style>
    </button>
  );
};

const MemoButton = React.memo<React.PropsWithChildren<ButtonProps>>(Button);

export default withDefaults(MemoButton, defaultProps);
