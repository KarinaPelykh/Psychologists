import { useSelector } from "react-redux";
import { userSelector } from "../redux/Auth/AuthSelector";
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

type Prop = {
  children: ReactNode;
};
export const PrivatePage = ({ children }: Prop) => {
  const isLogin = useSelector(userSelector);

  const location = useLocation();

  if (!isLogin || isLogin.name === "") {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};
