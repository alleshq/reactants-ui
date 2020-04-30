import React, { useRef, useMemo } from "react";
import withDefaults from "../utils/with-defaults";
import useTheme from "../styles/use-theme";
import { getInputColors } from "./styles";

interface Props {
  width?: number | string;
  errored?: boolean;
  className?: string;
}

const defaultProps = {
  width: "auto" as number | string,
  errored: false,
  disabled: false,
  className: "",
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export type InputProps = Props & typeof defaultProps & NativeAttrs;

const Input: React.FC<React.PropsWithChildren<InputProps>> = ({
  children,
  className,
  width,
  errored,
  disabled,
  ...props
}) => {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const { bg, color, border, darkerBorder } = useMemo(
    () => getInputColors(theme, errored),
    [theme, errored]
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
          transition: border-color 0.2s ease;
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
