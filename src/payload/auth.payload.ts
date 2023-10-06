export interface SendInfoRegisterPayload {
  username: string
  password: string
  email: string
}
export interface SendInfoRegisterReponse {
  id: number
  username: string
  email: string
  timeStart: string
  timeEnd: string
}