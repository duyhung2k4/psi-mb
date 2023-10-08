import React from "react";
import { Button, ButtonProps } from "@rneui/base";

const ButtonCustom: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      color={"#00c638"}
      {...props}
      buttonStyle={{
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
        ...(props.buttonStyle as any)
      }}
    />
  )
}

export default ButtonCustom;