import { createAsyncThunk } from "@reduxjs/toolkit";
import { onValue, query, ref } from "firebase/database";
import { db } from "../../firebase/config";
export const getPsychology = createAsyncThunk(
  "get/psychology",
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await query(ref(db));

      const dataList = await new Promise((resolve, reject) => {
        onValue(
          snapshot,
          (snapshot) => {
            const res = snapshot.val();
            if (res) {
              const dataList = Object.values(res.data);
              resolve(dataList);
            } else {
              reject("No data available");
            }
          },
          (error) => {
            reject(error);
          }
        );
      });

      return dataList;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      return rejectWithValue({ message: errorMessage });
    }
  }
);
