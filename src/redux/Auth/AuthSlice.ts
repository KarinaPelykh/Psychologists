import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./AuthOperation";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  isLoading: false,
  isLogin: false,
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // saveUser: (state, action) => {
    //   state.user = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogin = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogin = true;
      });
  },
});
// export const { saveUser } = AuthSlice.actions;
export const authReducer = AuthSlice.reducer;
