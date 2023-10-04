import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Container from "../page/container";
import Auth from "../page/auth";
import { SCREEN } from "../constants/router";

const Stack = createNativeStackNavigator();

const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }} 
        initialRouteName={SCREEN.CONTAINER.INDEX}
      >
        <Stack.Screen name={SCREEN.CONTAINER.INDEX} component={Container} />
        <Stack.Screen name={SCREEN.AUTH.INDEX} component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter;