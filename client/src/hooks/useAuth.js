import { useContext } from "react";

import { login } from "../api/auth-api";
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
