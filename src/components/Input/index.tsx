import { Input, InputProps } from "@rneui/base";
import React from "react";

const InputCustom: React.FC<InputProps> = (props) => {
  return (
    <Input
      {...(props as any)}
      style={{
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#F1F4F5",
      }}
      inputContainerStyle={{
        borderBottomWidth: 0,
      }}
      containerStyle={{
        paddingHorizontal: 0,
      }}
    />
  )
}

export default InputCustom;