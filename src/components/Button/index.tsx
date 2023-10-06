import React from "react";
import { Button, ButtonProps } from "@rneui/base";

const ButtonCustom: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      style={{
        width: "100%",
        borderRadius: 8,
      }}
      buttonStyle={{
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
      }}
    />
  )
}

export default ButtonCustom;