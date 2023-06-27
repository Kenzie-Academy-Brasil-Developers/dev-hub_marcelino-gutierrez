import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const ProtectedRoutes = () => {
  const { userInfo } = useContext(UserContext);

  return userInfo ? <Outlet /> : <Navigate to="/" />;
};
