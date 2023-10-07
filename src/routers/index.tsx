import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "../constants/router";

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


const Stack = createNativeStackNavigator();

const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }} 
        initialRouteName={SCREEN.CHECK_AUTH.INDEX}
      >
        <Stack.Screen name={SCREEN.CHECK_AUTH.INDEX} component={CheckAuth} />

        {/* Container */}
        <Stack.Screen name={SCREEN.CONTAINER.INDEX} component={Container} />

        {/* Container - Home */}
        <Stack.Screen name={SCREEN.CONTAINER.HOME.COURSE.INDEX} component={CourseHome} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.COURSE.PRACTICE.INDEX} component={CourseHomePractice} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.COURSE.MAJOR.INDEX} component={CourseHomeMajor} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.COURSE.SKILL.INDEX} component={CourseHomeSkill} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.COURSE.LAGUAGE.INDEX} component={CourseHomeLanguage} />

        <Stack.Screen name={SCREEN.CONTAINER.HOME.UNIVERSITY.INDEX} component={UniversityHome} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.JOB.INDEX} component={JobHome} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.EXTRACURRICULAR.INDEX} component={ExtracurricularHome} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.MENTOR.INDEX} component={MentorHome} />

        <Stack.Screen name={SCREEN.AUTH.REGISTER.INDEX} component={Register} />
        <Stack.Screen name={SCREEN.AUTH.LOGIN.INDEX} component={Login} />
        <Stack.Screen name={SCREEN.AUTH.ACCEPT_CODE_REGISTER.INDEX} component={AcceptCodeRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter;