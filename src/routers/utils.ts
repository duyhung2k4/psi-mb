import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

// <===========================Param List========================>

// Global ParamsList
export type StackParamList = {
  /* ============================== Authen ============================== */
  CheckAuth: undefined
  Register: undefined
  AcceptCodeRegister: undefined
  Login: undefined


  /* ============================== User ============================== */
  // Container
  Container: undefined

  // Course
  CourseHome: undefined
  // Course - Practice
  CourseHomePractice: undefined
  CourseHomePracticeDetail: { courseId: number }
  // Course - Major
  CourseHomeMajor: undefined 
  // Course - Skill
  CourseHomeSkill: undefined
  // Course - Language
  CourseHomeLanguage: undefined

  // University
  UniversityHome: undefined
  // Job
  JobHome: undefined
  // Extracurricular
  ExtracurricularHome: undefined
  // Menter
  MentorHome: undefined



  /* ============================== CreatorCourse ============================== */
  ContainerCreatorCourse: undefined
}
export type TypeStackParamList = keyof StackParamList;


// BottomTabs
// Container ParamsList
export type ContainerBottomTabParamsList = {
  Home: undefined
  Posts: undefined
  Learn: undefined
  Account: undefined
}
export type TypeContainerBottomTabParamsList = keyof ContainerBottomTabParamsList;

export type ContainerCreaterCourseBottomTabs = {
  Course: undefined
  Posts: undefined
  StudyRegistrant: undefined
  Account: undefined
}










// <===========================Props Screen========================>

// Props Screen Global
/* ============================== Authen ============================== */
// export type AcceptCodeRegisterProps = NativeStackScreenProps<StackParamList, "AcceptCodeRegister">
// export type LoginProps = NativeStackScreenProps<StackParamList, "Login">
// export type CheckAuthProps = NativeStackScreenProps<StackParamList, "CheckAuth">
// export type RegisterProps = NativeStackScreenProps<StackParamList, "Register">




// /* ============================== User ============================== */
// // Container
// export type ContainerProps = NativeStackScreenProps<StackParamList, "Container">

// // Course
// export type CourseHomeProps = NativeStackScreenProps<StackParamList, "CourseHome">
// // Course - Practice
// export type CourseHomePracticeProps = NativeStackScreenProps<StackParamList, "CourseHomePractice">
// export type CourseHomePracticeDetailProps = NativeStackScreenProps<StackParamList, "CourseHomePracticeDetail">
// // Course - Major
// export type CourseHomeMajorProps = NativeStackScreenProps<StackParamList, "CourseHomeMajor">
// // Course - Skil
// export type CourseHomeSkillProps = NativeStackScreenProps<StackParamList, "CourseHomeSkill">
// // Course - Language
// export type CourseHomeLanguageProps = NativeStackScreenProps<StackParamList, "CourseHomeLanguage">


// // University
// export type UniversityHomeProps = NativeStackScreenProps<StackParamList, "UniversityHome">
// // Job
// export type JobHomeProps = NativeStackScreenProps<StackParamList, "JobHome">
// // Extracurricular
// export type ExtracurricularHomeProps = NativeStackScreenProps<StackParamList, "ExtracurricularHome">
// // Mentor
// export type MentorHomeProps = NativeStackScreenProps<StackParamList, "MentorHome">



// // Props Screen Container
// // Props Screen Container - BottomTabs
// export type ContainerBottomTabHomeProps = BottomTabScreenProps<ContainerBottomTabParamsList, "Home">
// export type ContainerBottomTabPostsProps = BottomTabScreenProps<ContainerBottomTabParamsList, "Posts">
// export type ContainerBottomTabLearnProps = BottomTabScreenProps<ContainerBottomTabParamsList, "Learn">
// export type ContainerBottomTabAccountProps = BottomTabScreenProps<ContainerBottomTabParamsList, "Account">






// /* ============================== Creator course ============================== */
// export type ContainerCreatorCourseProps = NativeStackScreenProps<StackParamList, "ContainerCreatorCourse">


// Props Screen Container Creator Course
// Props Screen Container Creator Course - BottomTabs