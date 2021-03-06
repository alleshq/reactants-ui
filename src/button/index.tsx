import React, { memo, HTMLAttributes } from "react";
import cx from "classnames";

import { Loading } from "../loading";
import styles from "./button.module.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  danger?: boolean;
  secondary?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  flat?: boolean;
  rounded?: boolean;
  loading?: boolean;
  fluid?: boolean;
  inline?: boolean;
  right?: boolean;
  left?: boolean;
  icon?: React.ReactNode;
  iconRight?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<Props> = memo<Props>(
  ({
    primary,
    danger,
    secondary,
    small,
    medium,
    large,
    flat,
    rounded,
    loading,
    fluid,
    icon,
    iconRight,
    disabled,
    children,
    inline,
    right,
    left,
    ...props
  }) => {
    return (
      <button
        role="button"
        disabled={disabled || loading}
        className={cx(styles.btn, {
          [styles.primary]: primary,
          [styles.danger]: danger,
          [styles.secondary]: secondary,
          [styles.small]: small,
          [styles.medium]: medium,
          [styles.large]: large,
          [styles.flat]: flat,
          [styles.rounded]: rounded,
          [styles.loading]: loading,
          [styles.fluid]: fluid,
          [styles.inline]: inline,
          [styles.left]: left,
          [styles.right]: right,
        })}
        {...props}
      >
        {icon && !loading ? (
          <span
            className={cx(styles.icon, {
              [styles["icon-right"]]: iconRight,
            })}
          >
            {icon}
          </span>
        ) : null}

        <span className={styles.text}>{children}</span>

        {loading && (
          <span className={styles["loading-dots"]}>
            <Loading />
          </span>
        )}
      </button>
    );
  }
);
