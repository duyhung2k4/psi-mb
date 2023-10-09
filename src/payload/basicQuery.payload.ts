import { TypeModelType } from "../constants/modelType"

export interface BasicQueryPayload {
  data: Record<string, any> | Record<string, any>[]
  modelType: TypeModelType
}

export interface BasicQueryPayloadInsert extends BasicQueryPayload {
  option: "insert"
}
export interface BasicQueryPayloadUpdate extends BasicQueryPayload {
  option: "update"
}
export interface BasicQueryPayloadDelete extends BasicQueryPayload {
  option: "delete"
}

export interface BasicQueryPayResponse {
  data: Record<string, any> | Record<string, any>[]
}