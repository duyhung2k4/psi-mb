import { combineReducers } from "redux";
import { authApi } from "./query/api/auth";
import { authSlice } from "./slice/auth";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
})