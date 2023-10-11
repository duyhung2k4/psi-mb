import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { ContainerCreaterCourseBottomTabs, StackParamList } from "../../routers/utils";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./styled";
import { IconSvg } from "../../assets/export";
import Course from "./content/course";
import Posts from "./content/posts";
import StudyRegistrant from "./content/studyRegistrant";
import Account from "./content/account";

const Tab = createBottomTabNavigator<ContainerCreaterCourseBottomTabs>();
type Props = NativeStackScreenProps<StackParamList, "ContainerCreatorCourse">;
const ContainerCreatorCourse: React.FC<Props> = ({ navigation }) => {

  return (
    <View style={styles.root}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabbarStyle,
      }}
      initialRouteName={"Course"}
    >
      <Tab.Screen
        name={"Course"}
        component={Course}
        options={{
          tabBarIcon: () => IconSvg.IconCourseCreator({ height: 30, width: 30 }),
          title: "Khóa học",
        }}
      />
      <Tab.Screen
        name={"Posts"}
        component={Posts}
        options={{
          tabBarIcon: () => IconSvg.IconPost({ height: 30, width: 30 }),
          title: "Bài viết",
        }}
      />
      <Tab.Screen
        name={"StudyRegistrant"}
        component={StudyRegistrant}
        options={{
          tabBarIcon: () => IconSvg.IconStudentCreator({ height: 30, width: 30 }),
          title: "Học viên",
        }}
      />
      <Tab.Screen
        name={"Account"}
        component={Account}
        options={{
          tabBarIcon: () => IconSvg.IconAccount({ height: 30, width: 30 }),
          title: "Tài khoản",
        }}
      />
    </Tab.Navigator>
  </View>
  )
}

export default ContainerCreatorCourse;