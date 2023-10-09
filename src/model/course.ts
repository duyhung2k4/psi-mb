import { BaseModel } from "./base";
import { ProfileModel } from "./profile";

export enum TYPE_COURSE {
  TYPE_COURSE_SUBJECT12 = "subject12",
  TYPE_COURSE_MAJOR = "major",
  TYPE_COURSE_SKILL = "skill",
  TYPE_COURSE_LANGUAGE_CENTIFICATE = "languageCentificate",
}

export interface CourseModel extends BaseModel {
  creatorId: number
  name: string
  code: string
  type: TYPE_COURSE
  detail: string
  price: number

  creator?: ProfileModel
}