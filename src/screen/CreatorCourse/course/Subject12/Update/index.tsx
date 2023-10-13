import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { StackParamList } from "../../../../../routers/utils";

type Props = NativeStackScreenProps<StackParamList, "UpdateCourseSubject12">;
const UpdateCourseSubject12: React.FC<Props> = ({ navigation, route }) => {
  const courseSubject12Id = route.params.id;
  
  return (
    <View>
      <Text>UpdateCourseSubject12</Text>
    </View>
  )
}

export default UpdateCourseSubject12;