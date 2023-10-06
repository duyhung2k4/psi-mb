import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAppNavigate } from "../../hook/use-app-navigate";
import { SCREEN } from "../../constants/router";

const CheckAuth: React.FC = () => {
  const navigation = useAppNavigate();

  const checkAuth = async () => {
    const data = await AsyncStorage.getItem("accessToken");

    if (data === null) {
      navigation.navigate(SCREEN.AUTH.LOGIN.INDEX);
      return;
    }

    navigation.navigate(SCREEN.CONTAINER.INDEX);
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