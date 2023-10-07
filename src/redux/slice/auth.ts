import { createSlice } from "@reduxjs/toolkit";
import { ProfileModel } from "../../model/profile";
import { authApi, useLoginTokenMutation } from "../query/api/auth";

interface State {
  profile?: ProfileModel,
}

const initialState: State = {
  profile: undefined,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.loginToken.matchFulfilled, (state, { payload }) => {
      state.profile = payload.data?.profile;
    });

  }
})