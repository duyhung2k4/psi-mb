import { combineReducers } from "redux";
import { authApi } from "./query/api/auth";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
})