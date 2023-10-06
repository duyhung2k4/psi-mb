import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../baseQuery";
import { endPoint } from "../endpoint";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { SendInfoRegisterPayload, SendInfoRegisterReponse } from "../../../payload/auth.payload";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    sendInfoRegister: builder.mutation<QueryReturnValue<SendInfoRegisterReponse>, SendInfoRegisterPayload>({
      query: (payload) => ({
        ...endPoint.auth.sendInfoRegister(),
        data: payload,
      }),
    })
  })
})

export const { useSendInfoRegisterMutation } = authApi;