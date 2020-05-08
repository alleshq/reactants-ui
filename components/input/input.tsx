import React, { useMemo, useState, useEffect } from "react";
import { useTheme } from "../styles/use-theme";
import { getInputColors } from "./styles";
import { InputPassword } from "./input-password";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  initialValue?: string;
  width?: number | string;
  errored?: boolean;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  label?: string;
  className?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  onIconClick?: React.MouseEventHandler<HTMLSpanElement>;
  onIconRightClick?: React.MouseEventHandler<HTMLSpanElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export type { Props as InputProps };

const Input: React.FC<Props> = ({
  value,
  initialValue = "",
  width = "auto",
  errored = false,
  error,
  disabled,
  readOnly,
  label,
  className = "",
  icon,
  onIconClick,
  iconRight,
  onIconRightClick,
  onChange,
  onFocus,
  onBlur,
  children,
  placeholder,
  ...props
}) => {
  if (typeof width == "number") width = `${width}px`;

  const theme = useTheme();
  const [focused, setFocused] = useState<boolean>(false);
  const { fg, border, darkerBorder } = useMemo(
    () => getInputColors(theme, errored),
    [theme, errored]
  );

  const [selfValue, setSelfValue] = useState<string>(initialValue);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;
    setSelfValue(event.target.value);
    onChange && onChange(event);
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  useEffect(() => {
    if (value === undefined) return;
    setSelfValue(value);
  }, [value]);

  return (
    <>
      {label && <label>{label}</label>}

      <div className={`input-container ${className}`}>
        <div className={`input-wrapper ${focused ? "focused" : ""}`}>
          {icon && (
            <span
              className={`input-icon ${onIconClick ? "clickable" : ""}`}
              onClick={onIconClick}
            >
              {icon}
            </span>
          )}

          <input
            className={`${icon ? "left-icon" : iconRight ? "icon-right" : ""}`}
            disabled={disabled}
            placeholder={placeholder}
            value={selfValue}
            readOnly={readOnly}
            onChange={changeHandler}
            onBlur={blurHandler}
            onFocus={focusHandler}
            {...props}
          />

          {iconRight && (
            <span
              className={`input-icon ${onIconRightClick ? "clickable" : ""}`}
              onClick={onIconRightClick}
            >
              {iconRight}
            </span>
          )}
        </div>
      </div>

      {error && (
        <span className="input-error" style={{ opacity: errored ? 1 : 0 }}>
          {error}
        </span>
      )}

      <style jsx>{`
        .input-container {
          display: inline-flex;
          align-items: center;
          width: ${width};
        }

        .input-wrapper {
          display: inline-flex;
          vertical-align: middle;
          align-items: center;
          height: 100%;
          flex: 1;
          user-select: none;
          border-radius: ${theme.layout.radius};
          border: 1px solid ${border};
          transition: border 0.2s ease 0s, color 0.2s ease 0s;
        }

        .input-wrapper.focused {
          border-color: ${darkerBorder};
        }

        input {
          padding: 10px 12px;
          box-shadow: none;
          font-size: 0.875em;
          background-color: transparent;
          border: none;
          color: ${fg};
          font-family: ${theme.font.sans};
          outline: none;
          border-radius: 0;
          width: 100%;
          -webkit-appearance: none;
        }

        input.left-icon {
          margin-left: 0px;
        }

        input.right-icon {
          margin-right: 0px;
        }

        input:disabled {
          opacity: 0.6;
        }

        .input-icon {
          box-sizing: content-box;
          display: flex;
          width: 16px;
          height: 100%;
          align-items: center;
          vertical-align: center;
          margin: 0;
          padding: 0 10px;
          line-height: 1;
          position: relative;
        }

        .input-icon.clickable {
          cursor: pointer;
        }

        label {
          display: block;
          font-weight: normal;
          color: ${theme.colors.grey6};
          padding: 0 0 0 1px;
          margin-bottom: ${theme.layout.gapHalf};
          font-size: 0.875rem;
          line-height: 1.5;
        }

        label > :global(*:first-child) {
          margin-top: 0;
        }

        label > :global(*:last-child) {
          margin-bottom: 0;
        }

        .input-error {
          color: ${theme.colors.danger};
          font-size: 0.85em;
          transition: opacity 0.2s ease;
        }

        ::placeholder,
        ::-moz-placeholder,
        :-ms-input-placeholder,
        ::-webkit-input-placeholder {
          color: ${theme.colors.grey3};
        }
      `}</style>
    </>
  );
};

type InputWithOtherComponents = typeof Input & {
  Password: typeof InputPassword;
};

const InputWithOtherComponents = Input as InputWithOtherComponents;
export { InputWithOtherComponents as Input };
