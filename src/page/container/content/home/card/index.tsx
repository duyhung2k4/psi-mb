import React from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NameIcon } from "../../../../../components/Icon";
import { Text } from "@rneui/base";
import { IconSvg } from "../../../../../assets/export";

export interface CardHomeProps {
  iconName: NameIcon
  title: string
  detail: string
  backgroundColor: string
  icon: React.ReactNode
}
const CardHome: React.FC<CardHomeProps> = (props) => {
  return (
    <LinearGradient
      colors={[props.backgroundColor, "#707070"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        width: "100%",
        height: 150,
        borderRadius: 8,
        padding: 20,
      }}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}>
        <View
          style={{
            height: "100%",
            flex: 1,
            borderRadius: 8,
          }}
        >
          {props.icon}
        </View>
        <View
          style={{
            height: "100%",
            flex: 3,
          }}
        >
          <Text h2Style={{ color: "#FFFFFF" }} h2>{props.title}</Text>
          <Text style={{ color: "#FFFFFF" }}>{props.detail}</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default CardHome;