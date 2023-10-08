import { BottomTabNavigationProp, BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeNavigationProp } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StackNavigationProp } from "@react-navigation/stack"

// <===========================Param List========================>

// Global ParamsList
export type StackParamList = {
  // Auth
  CheckAuth: undefined
  Register: undefined
  AcceptCodeRegister: undefined
  Login: undefined

  // Container
  Container: undefined
  // Container - Home
  // Container - Home - Course
  CourseHome: undefined
  CourseHomePractice: undefined
  CourseHomeMajor: undefined
  CourseHomeSkill: undefined
  CourseHomeLanguage: undefined
  // Container - Home - University
  UniversityHome: undefined
  // Container - Home - Job
  JobHome: undefined
  // Container - Home - Extracurricular
  ExtracurricularHome: undefined
  // Container - Home - Mentor
  MentorHome: undefined
}
export type TypeStackParamList = keyof StackParamList;



// Container ParamsList
export type ContainerBottomTabParamsList = {
  Home: undefined
  Posts: undefined
  Learn: undefined
  Account: undefined
}
export type TypeContainerBottomTabParamsList = keyof ContainerBottomTabParamsList;










// <===========================Props Screen========================>

// Props Screen Global
// Auth
export type AcceptCodeRegisterProps = NativeStackScreenProps<StackParamList, "AcceptCodeRegister">
export type LoginProps = NativeStackScreenProps<StackParamList, "Login">
export type CheckAuthProps = NativeStackScreenProps<StackParamList, "CheckAuth">
export type RegisterProps = NativeStackScreenProps<StackParamList, "Register">
// Container
export type ContainerProps = NativeStackScreenProps<StackParamList, "Container">
// Container - Home
// Container - Home - Course
export type CourseHomeProps = NativeStackScreenProps<StackParamList, "CourseHome">
export type CourseHomePracticeProps = NativeStackScreenProps<StackParamList, "CourseHomePractice">
export type CourseHomeMajorProps = NativeStackScreenProps<StackParamList, "CourseHomeMajor">
export type CourseHomeSkillProps = NativeStackScreenProps<StackParamList, "CourseHomeSkill">
export type CourseHomeLanguageProps = NativeStackScreenProps<StackParamList, "CourseHomeLanguage">
// Container - University
export type UniversityHomeProps = NativeStackScreenProps<StackParamList, "UniversityHome">
// Container - Job
export type JobHomeProps = NativeStackScreenProps<StackParamList, "JobHome">
// Container - Extracurricular
export type ExtracurricularHomeProps = NativeStackScreenProps<StackParamList, "ExtracurricularHome">
// Container - Mentor
export type MentorHomeProps = NativeStackScreenProps<StackParamList, "MentorHome">



// Props Screen Container
// Props Screen Container - BottomTabs
export type ContainerBottomTabHomeProps = BottomTabScreenProps<ContainerBottomTabParamsList, "Home">
export type ContainerBottomTabPostsProps = BottomTabScreenProps<ContainerBottomTabParamsList, "Posts">
export type ContainerBottomTabLearnProps = BottomTabScreenProps<ContainerBottomTabParamsList, "Learn">
export type ContainerBottomTabAccountProps = BottomTabScreenProps<ContainerBottomTabParamsList, "Account">
