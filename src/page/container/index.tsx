import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./styled";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./content/home";
import Learn from "./content/learn";
import Posts from "./content/posts";
import Account from "./content/account";

import { IconSvg } from "../../assets/export";
import { ContainerBottomTabParamsList, ContainerProps } from "../../routers/utils";

const Tab = createBottomTabNavigator<ContainerBottomTabParamsList>();
const Container: React.FC<ContainerProps> = ({ navigation, route }) => {
  // const [loginToken, { isLoading, isError }] = useLoginTokenMutation();

  // const checkAuth = async () => {
  //   const data = await AsyncStorage.getItem("accessToken");
    
  //   if(data === null) {
  //     navigation.navigate("Login");
  //     return;
  //   }
  // }

  // const gotoLogin = async () => {
  //   const _ = await AsyncStorage.removeItem("accessToken");
  //   navigation.navigate("Login");
  // }

  // useEffect(() => {
  //   loginToken(undefined);
  //   checkAuth();
  // }, []);

  // if(isError) gotoLogin();
  
  // if(isLoading) {
  //   return (
  //     <View
  //       style={{ 
  //         width: "100%",
  //         height: "100%",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <ActivityIndicator size="large" />
  //     </View>
  //   )
  // }

  return (
    <View style={styles.root}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          lazy: true,
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