import { createSlice } from "@reduxjs/toolkit";
import { getPsychology } from "./reducer";
import { Psychology } from "../../type/Psycholog";

const initialState = {
  psychology: [] as Psychology[],
  active: false,
};
export const psychologySlice = createSlice({
  name: "psychology",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPsychology.fulfilled, (state, actions) => {
      state.psychology = actions.payload as Psychology[];
    });
  },
});
export const psychologyReducer = psychologySlice.reducer;
