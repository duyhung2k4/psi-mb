import { BaseModel } from "./base";
import { CourseModel } from "./course";
import { ProfileModel } from "./profile";

export enum STATUS_REGISTER {
  PENDING = "pending",
  ACCEPTED = "accepted",
}

export interface RegisterCourseModel extends BaseModel {
  courseId: number
  profileId: number
  status: STATUS_REGISTER
  course?: CourseModel
  profile?: ProfileModel
}