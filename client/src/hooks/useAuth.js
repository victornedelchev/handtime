import { useContext } from "react";

import { toast } from "react-toastify";

import { login, register, logout } from "../api/auth-api";
import { AuthContext } from "../contexts/authContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContext);

  const loginHandler = async (email, password) => {
    try {
      const result = await login(email, password);
      changeAuthState(result);
  
      return result;
      
    } catch (error) {
      console.error(error);
      toast.error("Login failed!");
    }
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useContext(AuthContext);

  const registerHandler = async (username, email, password) => {
    try {
      const result = await register(username, email, password);
      changeAuthState(result);

      return result;
    } catch (error) {
      console.error(error);
      toast.error("Registration failed!");
    }
  };

  return registerHandler;
};

export const useLogout = () => {
  const { logout: localLogout } = useContext(AuthContext);

  const logoutHandler = async () => {
    try {
      await logout();
      localLogout();
      toast.success("Logout successful!");
    } catch (error) {
      console.error(error);
      toast.error("Logout failed!");
    }
  };

  return logoutHandler;
};
