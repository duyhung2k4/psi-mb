import React from "react";
import { View } from "react-native";
import { Button } from "@rneui/base";
import { useAppNavigate } from "../../hook/use-app-navigate";
import { SCREEN } from "../../constants/router";

const Auth: React.FC = () => {
  const navigation = useAppNavigate();
  return (
    <View>
      <Button
        onPress={() => navigation.navigate(SCREEN.CONTAINER.INDEX)}
        title={"Go to Home"}
      />
    </View>
  )
}

export default Auth;