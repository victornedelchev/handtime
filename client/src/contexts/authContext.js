import { createContext } from "react";

export const AuthContext = createContext({
  userId: "",
  email: "",
  username: "",
  accessToken: "",
  createdOn: "",
  isAuthenticated: false,
  logout: () => null,
  changeAuthState: (authState = {}) => null,
});
