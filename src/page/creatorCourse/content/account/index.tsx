import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { Button, Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { ContainerCreaterCourseBottomTabs, StackParamList } from "../../../../routers/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BottomTabNavigationProp, BottomTabScreenProps } from "@react-navigation/bottom-tabs";

const Account: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList, "ContainerCreatorCourse">>();
  const navigationAccount = useNavigation<BottomTabNavigationProp<ContainerCreaterCourseBottomTabs, "Account">>();

  const logOut = async () => {
    const _ = await AsyncStorage.removeItem("accessToken");
    navigationAccount.dispatch(StackActions.popToTop());
    navigation.navigate("Login");
  }
  return (
    <View>
      <Text>Account</Text>
      <Button
        onPress={logOut}
        title={"Đăng xuất"}
      />
    </View>
  )
}

export default Account;