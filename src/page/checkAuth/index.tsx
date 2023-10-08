import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { CheckAuthProps } from "../../routers/utils";

const CheckAuth: React.FC<CheckAuthProps> = ({ navigation, route }) => {
  const checkAuth = async () => {
    const data = await AsyncStorage.getItem("accessToken");

    if (data === null) {
      navigation.navigate("Login");
      return;
    }

    navigation.navigate("Container");
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  )
}

export default CheckAuth;