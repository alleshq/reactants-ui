import React, { useRef, useMemo } from "react";
import withDefaults from "../utils/with-defaults";
import { InputTypes } from "../utils/prop-types";
import useTheme from "../styles/use-theme";
import { getInputColors } from "./styles";

interface Props {
  type?: InputTypes;
  width?: number | string;
  className?: string;
}

const defaultProps = {
  type: "default" as InputTypes,
  width: "auto" as number | string,
  disabled: false,
  className: "",
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export type InputProps = Props & typeof defaultProps & NativeAttrs;

const Input: React.FC<React.PropsWithChildren<InputProps>> = ({
  children,
  className,
  type,
  width,
  disabled,
  ...props
}) => {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const { bg, color, border, darkerBorder } = useMemo(
    () => getInputColors(theme, type),
    [theme, type]
  );

  return (
    <>
      <input
        ref={inputRef}
        className={`input ${className}`}
        disabled={disabled}
        {...props}
      />

      <style jsx>{`
        .input {
          display: block;
          padding: 9px;
          font-size: 0.875em;
          box-sizing: border-box;
          background: ${bg};
          color: ${color};
          border-radius: 5px;
          border: 1px solid ${border};
          transition: all 0.2s ease;
          font-family: ${theme.font.sans};
          outline: none;
          width: ${width};
        }

        .input:focus {
          border: 1px solid ${darkerBorder};
        }

        .input:disabled {
          opacity: 0.6;
        }
      `}</style>
    </>
  );
};

const MemoButton = React.memo<React.PropsWithChildren<InputProps>>(Input);

export default withDefaults(MemoButton, defaultProps);
