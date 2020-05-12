import React, { HTMLAttributes } from "react";
import cx from "classnames";
import styles from "./textarea.module.css";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  resizable?: boolean;
  label?: string;
}

export const Textarea: React.FC<Props> = ({ resizable, label, ...props }) => {
  return (
    <>
      { label && <label className={styles.label}>{label}</label> }

      <textarea
        className={cx(styles.textarea, { [styles.resizable]: resizable })}
        {...props}
      />
    </>
  );
};
