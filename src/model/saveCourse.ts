import { BaseModel } from "./base";
import { CourseModel } from "./course";
import { ProfileModel } from "./profile";

export interface SaveCourseModel extends BaseModel {
  courseId: number
  profileId: number
  course?: CourseModel
  profile?: ProfileModel
}