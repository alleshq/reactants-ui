import React, { useRef, useMemo } from "react";
import withDefaults from "../utils/with-defaults";
import useTheme from "../styles/use-theme";
import { getInputColors } from "./styles";

interface Props {
  width?: number | string;
  errored?: boolean;
  label?: string;
  className?: string;
}

const defaultProps = {
  width: "auto" as number | string,
  errored: false,
  disabled: false,
  label: "",
  className: "",
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export type InputProps = Props & typeof defaultProps & NativeAttrs;

let counter = 0;

const Input: React.FC<React.PropsWithChildren<InputProps>> = ({
  children,
  className,
  width,
  errored,
  disabled,
  label,
  ...props
}) => {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const id = counter++;
  const { bg, color, border, darkerBorder } = useMemo(
    () => getInputColors(theme, errored),
    [theme, errored]
  );

  return (
    <div>
      {label && <label htmlFor={`input-${id}`}>{label}</label>}
      <input
        ref={inputRef}
        className={`input ${className}`}
        disabled={disabled}
        id={`input-${id}`}
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

        label {
          color: ${theme.palette.foreground}aa;
          display: inline-block;
          margin-bottom: 10px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

const MemoButton = React.memo<React.PropsWithChildren<InputProps>>(Input);

export default withDefaults(MemoButton, defaultProps);
