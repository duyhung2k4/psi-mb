import { CredentialModel } from "./credential"

export interface ProfileCourseModel {
  userId: number
  firstName: string
  lastName: string
  credential?: CredentialModel
}