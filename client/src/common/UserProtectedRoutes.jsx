import { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

export default function GuestProtectedRoues() {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return <Outlet />;
}
