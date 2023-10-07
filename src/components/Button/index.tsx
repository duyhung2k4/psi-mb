import React from "react";
import { Button, ButtonProps } from "@rneui/base";

const ButtonCustom: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      style={{
        width: "100%",
        borderRadius: 8,
      }}
      color={"#00c638"}
      {...props}
      buttonStyle={{
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
      }}
    />
  )
}

export default ButtonCustom;