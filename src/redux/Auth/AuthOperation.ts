import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
    const token = await user.getIdToken();

    console.log(userCredential.user);
    const data: UserResponse = {
      id: user.uid,
      email: user.email ?? "",
      name: user.displayName ?? name,
      token: token,
    };
    console.log(data);

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

    const token = await user.getIdToken();
    const data: UserResponse = {
      id: user.uid,
      email: user.email ?? "",
      name: user.displayName ?? "",
      token: token,
    };
    console.log(data);
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return rejectWithValue({ message: errorMessage });
  }
});

export const LogOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      return rejectWithValue({ message: errorMessage });
    }
  }
);
