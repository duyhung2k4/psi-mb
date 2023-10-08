import React from "react";
import { View } from "react-native";
import { Button } from "@rneui/base";

const Auth: React.FC = () => {
  return (
    <View>
      <Button
        //onPress={() => navigation.navigate(SCREEN.CONTAINER.INDEX)}
        title={"Go to Home"}
      />
    </View>
  )
}

export default Auth;