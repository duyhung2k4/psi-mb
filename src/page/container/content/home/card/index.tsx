import React from "react";
import { Pressable, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NameIcon } from "../../../../../components/Icon";
import { Text } from "@rneui/base";
import { styles } from "./styled";
import { ContainerBottomTabParamsList, StackParamList, TypeStackParamList } from "../../../../../routers/utils";
import { CompositeNavigationProp, NavigationProp, useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";

export interface CardHomeProps {
  iconName: NameIcon
  title: string
  detail: string
  backgroundColor: string
  icon: React.ReactNode
  href: TypeStackParamList
}
const CardHome: React.FC<CardHomeProps> = (props) => {
  const navigation = useNavigation<NavigationProp<StackParamList, "CourseHome">>();

  return (
    <Pressable 
      onPress={() => navigation.navigate(props.href)}
    >
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