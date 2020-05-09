import React, { memo } from "react";
import styles from "./header.module.css";

export const Header: React.FC = memo(({ children, ...props }) => {
  return (
    <header className={styles.header} {...props}>
      <nav className={styles.nav}>{children}</nav>
    </header>
  );
});
