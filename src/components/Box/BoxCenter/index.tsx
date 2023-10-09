import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "./styled";

interface BoxCenterProps {
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
}
const BoxCenter: React.FC<BoxCenterProps> = (props) => {
  return (
    <View
      style={{
        ...(styles.root as any),
        ...(props.style as any),
      }}
    >{props.children}</View>
  )
}

export default BoxCenter;