import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../firebase/config.ts";
import {
  MyKnownError,
  User,
  UserLogin,
  UserResponse,
} from "../../type/Auth.tsx";

export const registerThunk = createAsyncThunk<
  UserResponse,
  User,
  {
    rejectValue: MyKnownError;
  }
>("auth/register", async ({ name, email, password }, { rejectWithValue }) => {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });
    console.log(userCredential.user.providerData);
    const data: UserResponse = {
      id: user.uid,
      email: user.email ?? "",
      name: user.displayName ?? name,
    };

    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return rejectWithValue({ message: errorMessage });
  }
});

export const loginThunk = createAsyncThunk<
  UserResponse,
  UserLogin,
  { rejectValue: MyKnownError }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const UserCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = UserCredential.user;
    const data: UserResponse = {
      id: user.uid,
      email: user.email ?? "",
      name: user.displayName ?? "",
    };

    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return rejectWithValue({ message: errorMessage });
  }
});
