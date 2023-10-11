import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View } from "react-native";
import { Button, Text } from "@rneui/base";
import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { ContainerBottomTabParamsList, StackParamList } from "../../../../routers/utils";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = BottomTabScreenProps<ContainerBottomTabParamsList, "Account">;
const Account: React.FC<Props> = ({ navigation: navigationAccount }) => {
  const navigation = useNavigation<NavigationProp<StackParamList, "Container">>();

  const logOut = async () => {
    const _ = await AsyncStorage.removeItem("accessToken");
    navigationAccount.dispatch(StackActions.popToTop());
    navigation.navigate("Login");
  }
  return (
    <View>
      <Text>Account</Text>
      <Button
        title={"Log out"}
        onPress={logOut}
      />
    </View>
  )
}

export default Account;