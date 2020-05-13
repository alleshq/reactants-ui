import React, { memo } from "react";
import styles from "./loading.module.css";

interface Props extends React.HTMLAttributes<any> {}

export const Loading: React.FC<Props> = memo<Props>(({ ...props }) => {
  return (
    <div className={styles.loadiner} {...props}>
      <span className={styles.dots}>
        <i />
        <i />
        <i />
      </span>
    </div>
  );
});
