import { createSlice } from "@reduxjs/toolkit";
import { getPsychology } from "./reducer";

const initialState = {
  psychology: [],
  active: false,
};
export const Psychology = createSlice({
  name: "psychology",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPsychology.fulfilled, (state, { payload }) => {
      state.psychology = payload;
    });
  },
});
export const psychologyReducer = Psychology.reducer;
