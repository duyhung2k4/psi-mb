import React from "react";
import { Pressable, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NameIcon } from "../../../../../components/Icon";
import { Text } from "@rneui/base";
import { useAppNavigate } from "../../../../../hook/use-app-navigate";

export interface CardHomeProps {
  iconName: NameIcon
  title: string
  detail: string
  backgroundColor: string
  icon: React.ReactNode
  href: string
}
const CardHome: React.FC<CardHomeProps> = (props) => {
  const navigate = useAppNavigate();

  return (
    <Pressable onPress={() => navigate.navigate(props.href)}>
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
            <Text h2 style={{ color: "#FFFFFF" }}>{props.title}</Text>
            <Text style={{ color: "#FFFFFF" }}>{props.detail}</Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  )
}

export default CardHome;