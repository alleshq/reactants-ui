import React, { useState, useEffect, HTMLProps } from "react";

const Layout: React.FC<React.PropsWithChildren<HTMLProps<HTMLElement>>> = ({
  children,
  ...props
}) => {
  const [showAfterRender, setShowAfterRender] = useState<boolean>(false);

  useEffect(() => setShowAfterRender(true), []);
  if (!showAfterRender) return null;

  return <main {...props}>{children}</main>;
};

export default Layout;
