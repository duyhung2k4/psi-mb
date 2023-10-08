import { RouteProp, useRoute } from "@react-navigation/native";
import { Text } from "@rneui/base";
import React from "react";
import { StackParamList } from "../../../../routers/utils";

const CourseHomeSkill: React.FC = () => {
  const route = useRoute<RouteProp<StackParamList, "CourseHomeSkill">>();
  console.log(route.params);
  return (
    <Text>CourseHomeSkill</Text>
  )
}

export default CourseHomeSkill;