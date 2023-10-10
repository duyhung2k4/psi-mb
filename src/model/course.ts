import { BaseModel } from "./base";
import { ProfileCourseModel } from "./profileCourse";

export enum TYPE_COURSE {
  SUBJECT12 = "subject12",
  MAJOR = "major",
  SKILL = "skill",
  LANGUAGE_CENTIFICATE = "languageCentificate",
}

export interface CourseModel extends BaseModel {
  creatorId: number
  name: string
  code: string
  type: TYPE_COURSE
  detail: string
  price: number

  creator?: ProfileCourseModel
}