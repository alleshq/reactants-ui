import React, { PropsWithChildren } from "react";
import { resetId } from "react-id-generator";
import ThemeProvider, {
  ThemeParam,
} from "../styles/theme-provider/theme-provider";

export interface Props {
  theme?: ThemeParam;
}

const ReactantsProvider: React.FC<PropsWithChildren<Props>> = ({
  theme,
  children,
}) => {
  resetId();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ReactantsProvider;
