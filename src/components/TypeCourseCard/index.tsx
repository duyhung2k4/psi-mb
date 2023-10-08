import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { TypeStackParamList } from "../../routers/utils";

export interface TypeCourseCardProps {
  title: string
  icon: React.ReactNode
  color: string
  screen: TypeStackParamList
}
const TypeCourseCard: React.FC<TypeCourseCardProps> = (props) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 8,
        backgroundColor: props.color,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
        paddingTop: 20,
      }}
    >
      {props.icon}
      <Text h3 style={{ color: "#FFFFFF", marginTop: 10 }}>{props.title}</Text>
    </View>
  )
}

export default TypeCourseCard;