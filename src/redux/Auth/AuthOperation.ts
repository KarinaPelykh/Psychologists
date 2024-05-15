import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { User } from "../../components/Registration/Registration";
import { auth } from "../../firebase/config.ts";
export const registerThunk = createAsyncThunk<
  User,
  {
    rejectedWithValue: () => string;
  }
>("auth/register", async ({ email, password }, { rejectedWithValue }) => {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data);
    return data;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});
