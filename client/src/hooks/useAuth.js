import { useContext } from "react";

import { login, register } from "../api/auth-api";
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
