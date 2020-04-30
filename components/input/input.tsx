import React, { useMemo, useState, useEffect } from "react";
import useTheme from "../styles/use-theme";
import { getInputColors } from "./styles";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  initialValue?: string;
  width?: number | string;
  errored?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  label?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  value,
  initialValue = "",
  width = "auto",
  errored = false,
  disabled,
  readOnly,
  label,
  className,
  onChange,
  onFocus,
  onBlur,
  children,
  placeholder,
  ...props
}) => {
  const theme = useTheme();
  if (typeof width == "number") width = `${width}px`;
  const colors = useMemo(() => getInputColors(theme, errored), [
    theme,
    errored,
  ]);

  const [selfValue, setSelfValue] = useState<string>(initialValue);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;
    setSelfValue(event.target.value);
    onChange && onChange(event);
  };

  useEffect(() => {
    if (value === undefined) return;
    setSelfValue(value);
  }, [value]);

  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}</label>}

      <input
        disabled={disabled}
        placeholder={placeholder}
        value={selfValue}
        readOnly={readOnly}
        onChange={changeHandler}
        onBlur={onBlur}
        onFocus={onFocus}
        {...props}
      />

      <style jsx>{`
        .input-container {
          width: ${width};
        }

        input {
          display: block;
          padding: 9px;
          font-size: 0.875em;
          box-sizing: border-box;
          background-color: ${colors.bg};
          color: ${colors.fg};
          border-radius: ${theme.layout.radius};
          border: 1px solid ${colors.border};
          transition: border-color 0.2s ease;
          font-family: ${theme.font.sans};
          outline: none;
          width: 100%;
        }

        input:focus {
          border: 1px solid ${colors.darkerBorder};
        }

        input:disabled {
          opacity: 0.6;
        }

        label {
          color: ${theme.palette.grey6};
          display: inline-block;
          margin-bottom: 10px;
          font-weight: 500;
          font-size: 0.875em;
        }
      `}</style>
    </div>
  );
};

export default Input;
