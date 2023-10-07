import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./styled";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./content/home";
import Learn from "./content/learn";
import Posts from "./content/posts";
import Account from "./content/account";

import { IconSvg } from "../../assets/export";
import { SCREEN } from "../../constants/router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppNavigate } from "../../hook/use-app-navigate";

const Tab = createBottomTabNavigator();
const Container: React.FC = () => {
  console.log("Container");
  const navigation = useAppNavigate();

  const checkAuth = async () => {
    const data = await AsyncStorage.getItem("accessToken");
    
    if(data === null) {
      navigation.navigate(SCREEN.AUTH.LOGIN.INDEX);
      return;
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <View style={styles.root}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          lazy: true,
          tabBarStyle: styles.tabbarStyle,
        }}
        initialRouteName={SCREEN.CONTAINER.HOME.INDEX}
      >
        <Tab.Screen
          name={SCREEN.CONTAINER.HOME.INDEX}
          component={Home}
          options={{
            tabBarIcon: () => IconSvg.IconHome({ height: 30, width: 30 }),
            title: "Trang chủ",
          }}
        />
        <Tab.Screen
          name={SCREEN.CONTAINER.POSTS.INDEX}
          component={Posts}
          options={{
            tabBarIcon: () => IconSvg.IconPost({ height: 30, width: 30 }),
            title: "Bài viết",
          }}
        />
        <Tab.Screen
          name={SCREEN.CONTAINER.LEARN.INDEX}
          component={Learn}
          options={{
            tabBarIcon: () => IconSvg.IconStudy({ height: 30, width: 30 }),
            title: "Học tập",
          }}
        />
        <Tab.Screen
          name={SCREEN.CONTAINER.ACCOUNT.INDEX}
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