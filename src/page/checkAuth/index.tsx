import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ROLE_CODE } from "../../model/role";
import { ActivityIndicator, View } from "react-native";
import { CheckAuthProps } from "../../routers/utils";
import { useLoginTokenMutation } from "../../redux/query/api/auth";
import { CredentialModel } from "../../model/credential";
import { LoginResponse } from "../../payload/auth.payload";

const CheckAuth: React.FC<CheckAuthProps> = ({ navigation }) => {
  const [loginToken, { isError }] = useLoginTokenMutation();
  const [accessToken, setAccessToken] = useState<string | null>("");

  const getAccessToken = async () => {
    const data = await AsyncStorage.getItem("accessToken");
    setAccessToken(data);
  }

  const handlerNavigation = (credential: CredentialModel) => {
    const role = credential.role?.code
    if(!role) {
      navigation.navigate("Login");
      return;
    }

    switch (role) {
      case ROLE_CODE.USER:
        navigation.navigate("Container");
        break;
      case ROLE_CODE.CREATOR_COURSE:
        navigation.navigate("ContainerCreatorCourse");
        break;
      default:
        break;
    }
  }

  const checkAuth = async () => {
    if (accessToken === null) {
      navigation.navigate("Login");
      return;
    }
    if(accessToken === "") return;

    const result = await loginToken(undefined);

    if(isError) {
      navigation.navigate("Login");
      return;
    }

    if ("data" in result) {
      const credential = ((result.data.data as any) as LoginResponse).profile.credential;
      if (credential === undefined) {
        navigation.navigate("Login");
        return;
      }
      handlerNavigation(credential);
    } 

  };

  useEffect(() => {
    checkAuth();
  }, [accessToken]);

  useEffect(() => {
    getAccessToken();
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