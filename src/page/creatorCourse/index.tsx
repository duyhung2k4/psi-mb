import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { ContainerCreatorCourseProps } from "../../routers/utils";

const ContainerCreatorCourse: React.FC<ContainerCreatorCourseProps> = ({ navigation }) => {

  const logOut = async () => {
    const _ = await AsyncStorage.removeItem("accessToken");
    navigation.navigate("Login");
  }
  return (
    <View>
      <Text>ContainerCreatorCourse</Text>
      <Button
        title={"Đăng xuất"}
        onPress={logOut}
      />
    </View>
  )
}

export default ContainerCreatorCourse;