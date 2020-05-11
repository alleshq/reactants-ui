import React, { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./input.module.css";
import { InputPassword } from "./input-password";

interface Props {
  value?: string;
  fluid?: boolean;
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
  placeholder?: string;
  initialValue?: string;
  type?: string;
}

export type { Props as InputProps };

const Input: React.FC<Props> = ({
  value,
  initialValue = "",
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
  fluid,
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);
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
      {label && <label className={styles.label}>{label}</label>}

      <div
        className={cx(styles["input-container"], {
          [styles.focused]: focused,
          [styles.disabled]: disabled,
          [styles.errored]: errored,
          [styles.fluid]: fluid,
        })}
      >
        {icon && (
          <span
            className={cx(styles.icon, { [styles.clickable]: onIconClick })}
            onClick={onIconClick}
          >
            {icon}
          </span>
        )}

        <input
          className={cx(styles.input, {
            [styles["left-icon"]]: icon,
            [styles["right-icon"]]: iconRight,
          })}
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
            className={cx(styles.icon, {
              [styles.clickable]: onIconRightClick,
            })}
            onClick={onIconRightClick}
          >
            {iconRight}
          </span>
        )}
      </div>

      {error && (
        <span className={styles.error} style={{ opacity: errored ? 1 : 0 }}>
          {error}
        </span>
      )}
    </>
  );
};

type InputWithOtherComponents = typeof Input & {
  Password: typeof InputPassword;
};

const InputWithOtherComponents = Input as InputWithOtherComponents;
export { InputWithOtherComponents as Input };
