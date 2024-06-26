import { State } from "../../type/Auth";

export const userSelector = (state: State) => state.auth.user;
export const isLoginSelector = (state: State) => state.auth.isLogin;
export const refreshSelector = (state: State) => state.auth.token;
