import { Divider, Text } from "@rneui/base";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface DividerCustomProps {
  title: string
  style?: StyleProp<ViewStyle>
}
const DividerCustom: React.FC<DividerCustomProps> = (props) => {
  let styleProps = {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  if(props.style !== undefined) {
    styleProps = {
      ...styleProps, 
      ...(props.style as any)
    }
  }

  return (
    <View 
      style={styleProps as any} 
    >
      <Divider
        style={{
          width: "20%",
          marginRight: 10,
        }}
        width={1}
        subHeaderStyle={{
          fontSize: 15,
        }}
      />
      <Text>{props.title}</Text>
      <Divider
        style={{
          width: "20%",
          marginLeft: 10,
        }}
        width={1}
        subHeaderStyle={{
          fontSize: 15,
        }}
      />
    </View>
  )
}

export default DividerCustom;