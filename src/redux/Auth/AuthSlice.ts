import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./AuthOperation";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  isLoading: false,
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
      console.log(state.user);
    });
  },
});
export const authReducer = AuthSlice.reducer;
