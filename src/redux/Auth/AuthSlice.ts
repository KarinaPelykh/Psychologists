import { createSlice } from "@reduxjs/toolkit";
import { LogOut, loginThunk, registerThunk } from "./AuthOperation";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoading: false,
  isLogin: false,
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(LogOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.isLogin = false;
      });
  },
});
export const { saveUser } = AuthSlice.actions;
export const authReducer = AuthSlice.reducer;
