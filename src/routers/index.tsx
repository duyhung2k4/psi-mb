import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Container from "../page/container";

// Auth
import Register from "../page/auth/register";
import AcceptCodeRegister from "../page/auth/acceptCodeRegister";
import Login from "../page/auth/login";
import CheckAuth from "../page/checkAuth";

// Home
// Home - Course
import CourseHome from "../screen/home/course";
import CourseHomePractice from "../screen/home/course/Practice";
import CourseHomeMajor from "../screen/home/course/Major";
import CourseHomeSkill from "../screen/home/course/Skill";
import CourseHomeLanguage from "../screen/home/course/Language";
// Home - Mentor
import MentorHome from "../screen/home/mentor";
// Home - University
import UniversityHome from "../screen/home/university";
// Home - Job
import JobHome from "../screen/home/job";
// Home - Extracurricular
import ExtracurricularHome from "../screen/home/extracurricular";
import { StackParamList } from "./utils";
import CourseHomePracticeDetail from "../screen/home/course/Practice/Detail";


const Stack = createNativeStackNavigator<StackParamList>();

const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }} 
        initialRouteName={"CheckAuth"}
      >
        <Stack.Screen name={"CheckAuth"} component={CheckAuth} />

        {/* Container */}
        <Stack.Screen name={"Container"} component={Container} />

        {/* Container - Home */}
        <Stack.Screen name={"CourseHome"} component={CourseHome} />
        <Stack.Screen name={"CourseHomePractice"} component={CourseHomePractice} />
        <Stack.Screen name={"CourseHomePracticeDetail"} component={CourseHomePracticeDetail} />
        <Stack.Screen name={"CourseHomeMajor"} component={CourseHomeMajor} />
        <Stack.Screen name={"CourseHomeSkill"} component={CourseHomeSkill} />
        <Stack.Screen name={"CourseHomeLanguage"} component={CourseHomeLanguage} />

        <Stack.Screen name={"UniversityHome"} component={UniversityHome} />
        <Stack.Screen name={"JobHome"} component={JobHome} />
        <Stack.Screen name={"ExtracurricularHome"} component={ExtracurricularHome} />
        <Stack.Screen name={"MentorHome"} component={MentorHome} />

        <Stack.Screen name={"Register"} component={Register} />
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"AcceptCodeRegister"} component={AcceptCodeRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter;