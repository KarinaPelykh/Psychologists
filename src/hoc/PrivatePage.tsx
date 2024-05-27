import { useSelector } from "react-redux";
import { isLoginSelector } from "../redux/Auth/AuthSelector";
import { Navigate, useLocation } from "react-router-dom";

export const PrivatePage = ({ children }) => {
  const isLogin = useSelector(isLoginSelector);

  const location = useLocation();

  if (!isLogin) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};
