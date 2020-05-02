import React, { useState } from "react";
import { Input, InputProps } from "./input";
import { Eye, EyeOff } from "react-feather";

interface Props extends InputProps {}

export const InputPassword: React.FC<Props> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <Input
        type={showPassword ? "text" : "password"}
        iconRight={showPassword ? <EyeOff /> : <Eye />}
        onIconRightClick={() => setShowPassword(!showPassword)}
        {...props}
      />
    </>
  );
};
