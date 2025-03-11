import { AuthContext } from "./authContext";
import usePersistedState from "../hooks/usePersistedState";

export default function AuthContextProvider(props) {
  const [authState, setAuthState] = usePersistedState("auth", {});

  const changeAuthState = (state) => {
    setAuthState(state);
  };

  const logout = () => {
    setAuthState(null);
  };

  const contextData = {
    userId: authState?._id,
    username: authState?.username,
    email: authState?.email,
    accessToken: authState?.accessToken,
    createdOn: authState?._createdOn,
    isAuthenticated: !!authState?.username,
    changeAuthState,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}
