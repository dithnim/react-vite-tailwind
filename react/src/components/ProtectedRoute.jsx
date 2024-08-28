import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Auth.jsx";

const ProtectedRoute = () => {
  const { isLogin } = useAuth();

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
