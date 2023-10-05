import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "../constants/router";
import Auth from "../page/auth";

import Container from "../page/container";

// Home
import CourseHome from "../screen/home/course";
import UniversityHome from "../screen/home/university";
import JobHome from "../screen/home/job";
import ExtracurricularHome from "../screen/home/extracurricular";
import MentorHome from "../screen/home/mentor";




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
        {/* Container */}
        <Stack.Screen name={SCREEN.CONTAINER.INDEX} component={Container} />

        {/* Container - Home */}
        <Stack.Screen name={SCREEN.CONTAINER.HOME.COURSE.INDEX} component={CourseHome} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.UNIVERSITY.INDEX} component={UniversityHome} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.JOB.INDEX} component={JobHome} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.EXTRACURRICULAR.INDEX} component={ExtracurricularHome} />
        <Stack.Screen name={SCREEN.CONTAINER.HOME.MENTOR.INDEX} component={MentorHome} />

        <Stack.Screen name={SCREEN.AUTH.INDEX} component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter;