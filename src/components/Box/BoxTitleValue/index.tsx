import { Text } from "@rneui/base";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "./styled";

interface BoxTitleValueProps {
  type?: "top" | "center" | "bottom" | "simple",
  style?: StyleProp<ViewStyle>,
  title: string | React.ReactNode
  value: string | React.ReactNode
}
const BoxTitleValue: React.FC<BoxTitleValueProps> = (props) => {
  return (
    <View
      style={{
        ...(styles.root as any),
        ...((styles as any)[props.type || "simple"] as any),
        ...((props.style || {}) as any),
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700"
        }}
      >{props.title}</Text>

      <Text
        style={{
          fontSize: 18,
        }}
      >{props.value}</Text>
    </View>
  )
}

export default BoxTitleValue;