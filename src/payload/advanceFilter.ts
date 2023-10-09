import { TypeModelType } from "../constants/modelType"

export interface AdvanceFilterPayload {
  conditions?: Record<string, any>
  modelType: TypeModelType
  page?: number
  pageSize?: number
}

export interface AdvanceFilterPayResponse {
  data: Record<string, any> | Record<string, any>[]
}

export const FILTER_DEFAULT: Omit<AdvanceFilterPayload, "modelType"> = {
  conditions: {},
  page: 1,
  pageSize: -1
}
