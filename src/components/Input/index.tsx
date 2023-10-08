import React from "react";
import { Input, InputProps } from "@rneui/base";

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
      autoComplete="off"
    />
  )
}

export default InputCustom;