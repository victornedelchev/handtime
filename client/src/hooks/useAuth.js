import { useContext } from "react";

import { login, register, logout } from "../api/auth-api";
import { AuthContext } from "../contexts/authContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContext);

  const loginHandler = async (email, password) => {
    const result = await login(email, password);

    changeAuthState(result);

    return result;
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useContext(AuthContext);

  const registerHandler = async (username, email, password) => {
    const result = await register(username, email, password);

    changeAuthState(result);

    return result;
  };

  return registerHandler;
};

export const useLogout = () => {
  const { logout: localLogout } = useContext(AuthContext);

  const logoutHandler = async () => {
    await logout();
    localLogout();
  };

  return logoutHandler;
};
