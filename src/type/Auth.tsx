export interface MyKnownError {
  message: string;
}
export type User = {
  name: string;
  email: string;
  password: string;
};
export type UserResponse = {
  id: string;
  email: string;
  name: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export interface State {
  auth: {
    user: {
      name: string;
      email: string;
    };
    token: null;
    isLoading: boolean;
    isLogin: boolean;
  };
}
