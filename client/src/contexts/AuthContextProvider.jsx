import { AuthContext } from "./authContext";
import usePersistedState from "../hooks/usePersistedState";

export default function AuthContextProvider(props) {
  const [authState, setAuthState] = usePersistedState('auth', {});

  const changeAuthState = (state) => {
    localStorage.setItem("accessToken", state.accessToken);
    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    username: authState.username,
    email: authState.email,
    accessToken: authState.accessToken,
    createdOn: authState._createdOn,
    isAuthenticated: !!authState.username,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}
