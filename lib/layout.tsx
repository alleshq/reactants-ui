import { useState, useEffect } from "react";

const Layout: React.FC = ({ children }) => {
  const [showAfterRender, setShowAfterRender] = useState<boolean>(false);

  useEffect(() => setShowAfterRender(true), []);
  if (!showAfterRender) return null;

  return <main>{children}</main>;
};

export default Layout;
