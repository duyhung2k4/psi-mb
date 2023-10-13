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
import CourseHome from "../screen/User/home/course";
import CourseHomePractice from "../screen/User/home/course/Practice";
import CourseHomeMajor from "../screen/User/home/course/Major";
import CourseHomeSkill from "../screen/User/home/course/Skill";
import CourseHomeLanguage from "../screen/User/home/course/Language";
// Home - Mentor
import MentorHome from "../screen/User/home/mentor";
// Home - University
import UniversityHome from "../screen/User/home/university";
// Home - Job
import JobHome from "../screen/User/home/job";
// Home - Extracurricular
import ExtracurricularHome from "../screen/User/home/extracurricular";
import CourseHomePracticeDetail from "../screen/User/home/course/Practice/Detail"
import { StackParamList } from "./utils";


import ContainerCreatorCourse from "../page/creatorCourse";
import CreaterCourseSubject12 from "../screen/CreatorCourse/course/Subject12/Creater";
import UpdateCourseSubject12 from "../screen/CreatorCourse/course/Subject12/Update";


const Stack = createNativeStackNavigator<StackParamList>();

const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: true,
          title: "",
        }} 
        initialRouteName={"CheckAuth"}
      >
        {/* ============================== Authen ============================== */}
        <Stack.Screen options={{ headerShown: false }} name={"CheckAuth"} component={CheckAuth} />
        <Stack.Screen options={{ headerShown: false }} name={"Register"} component={Register} />
        <Stack.Screen options={{ headerShown: false }} name={"Login"} component={Login} />
        <Stack.Screen options={{ headerShown: false }} name={"AcceptCodeRegister"} component={AcceptCodeRegister} />



        {/* ============================== User ============================== */}
        {/* Container */}
        <Stack.Screen options={{ headerShown: false }} name={"Container"} component={Container} />

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

        {/* ============================== Mentor ============================== */}
        <Stack.Screen options={{ headerShown: false }} name={"ContainerCreatorCourse"} component={ContainerCreatorCourse} />
        <Stack.Screen name={"CreaterCourseSubject12"} component={CreaterCourseSubject12} />
        <Stack.Screen name={"UpdateCourseSubject12"} component={UpdateCourseSubject12} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter;