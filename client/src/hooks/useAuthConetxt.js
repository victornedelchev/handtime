import { useContext } from "react";

import { AuthContext } from "../contexts/authContext";

export function useAuthContext() {
  const authData = useContext(AuthContext);

  return authData;
}
