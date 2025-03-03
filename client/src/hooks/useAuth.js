import { useContext } from "react";

import { login, register } from "../api/auth-api";
import { AuthContext } from "../contexts/authContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContext);

  const loginHandler = (email, password) => {
    const result = login(email, password);

    changeAuthState(result);

    return result;
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useContext(AuthContext);

  const registerHandler = (username, email, password) => {
    const result = register(username, email, password);

    changeAuthState(result);

    return result;
  };

  return registerHandler;
};
