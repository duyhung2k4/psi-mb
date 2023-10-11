import React, { useEffect } from "react";
import { styles } from "./styled";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./content/home";
import Learn from "./content/learn";
import Posts from "./content/posts";
import Account from "./content/account";

import { IconSvg } from "../../assets/export";
import { ContainerBottomTabParamsList, StackParamList } from "../../routers/utils";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator<ContainerBottomTabParamsList>();

type Props = NativeStackScreenProps<StackParamList, "Container">;
const Container: React.FC<Props> = ({ navigation, route }) => {

  return (
    <View style={styles.root}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabbarStyle,
        }}
        initialRouteName={"Home"}
      >
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{
            tabBarIcon: () => IconSvg.IconHome({ height: 30, width: 30 }),
            title: "Trang chủ",
          }}
        />
        <Tab.Screen
          name={"Posts"}
          component={Posts}
          options={{
            tabBarIcon: () => IconSvg.IconPost({ height: 30, width: 30 }),
            title: "Bài viết",
          }}
        />
        <Tab.Screen
          name={"Learn"}
          component={Learn}
          options={{
            tabBarIcon: () => IconSvg.IconStudy({ height: 30, width: 30 }),
            title: "Học tập",
          }}
        />
        <Tab.Screen
          name={"Account"}
          component={Account}
          options={{
            tabBarIcon: () => IconSvg.IconAccount({ height: 30, width: 30 }),
            title: "Tài khoản",
          }}
        />
      </Tab.Navigator>
    </View>
  )
}

export default Container;