import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../baseQuery";
import { endPoint } from "../endpoint";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { BasicQueryPayResponse, BasicQueryPayloadDelete, BasicQueryPayloadInsert, BasicQueryPayloadUpdate } from "../../../payload/basicQuery.payload";

export const basicQueryApi = createApi({
  reducerPath: "basicQuery",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    insertQuery: builder.mutation<QueryReturnValue<BasicQueryPayResponse>, BasicQueryPayloadInsert>({
      query: (payload) => ({
        ...endPoint.basicQuery.query(),
        data: payload
      })
    }),

    updateQuery: builder.mutation<QueryReturnValue<BasicQueryPayResponse>, BasicQueryPayloadUpdate>({
      query: (payload) => ({
        ...endPoint.basicQuery.query(),
        data: payload
      })
    }),

    deleteQuery: builder.mutation<QueryReturnValue<BasicQueryPayResponse>, BasicQueryPayloadDelete>({
      query: (payload) => ({
        ...endPoint.basicQuery.query(),
        data: payload
      })
    }),
  })
});

export const { 
  useInsertQueryMutation,
  useUpdateQueryMutation,
  useDeleteQueryMutation,
} = basicQueryApi;