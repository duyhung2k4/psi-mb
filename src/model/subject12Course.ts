import { BaseModel } from "./base";
import { CourseModel } from "./course";
import { Subject12Model } from "./subject12";

export interface Subject12CourseModel extends BaseModel {
  subject12Code: string
  courseId: number
  targetPoint: string
  time?: string | Date
  schedule?: string
  courseDuration: string
  note: string

  course?: CourseModel
  subject12?: Subject12Model
}