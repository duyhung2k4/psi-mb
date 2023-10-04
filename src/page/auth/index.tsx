import React from "react";
import { View } from "react-native";
import { Button } from "@rneui/base";
import { useAppNavigate } from "../../hook/use-app-navigate";

const Auth: React.FC = () => {
  const navigation = useAppNavigate();
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate("POSTS");
        }}
        title={"Home"}
      />
    </View>
  )
}

export default Auth;