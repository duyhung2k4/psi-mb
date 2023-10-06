import React from "react";
import { Pressable, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NameIcon } from "../../../../../components/Icon";
import { Text } from "@rneui/base";
import { useAppNavigate } from "../../../../../hook/use-app-navigate";
import { styles } from "./styled";

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
        style={styles.root}
      >
        <View
          style={styles.content}>
          <View
            style={styles.icon}
          >
            {props.icon}
          </View>
          <View
            style={styles.title}
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