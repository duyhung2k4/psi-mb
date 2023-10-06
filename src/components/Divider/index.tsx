import { Divider, Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";

interface DividerCustomProps {
  title: string
}
const DividerCustom: React.FC<DividerCustomProps> = (props) => {
  return (
    <View style={{ 
      width: "100%", 
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }} >
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