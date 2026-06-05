import { useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { clearAuth, getToken, getUser, saveAuth } from "../utils/storage";

function AuthProvider({ children }) {
  const [token, setToken] = useState(() => getToken());
  const [user, setUser] = useState(() => getUser());

  const login = ({ token, user }) => {
    saveAuth({ token, user });
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    clearAuth();
    setToken(null);
    setUser(null);
  };

  const value = useMemo(() => {
    return {
      token,
      user,
      isAuthenticated: !!token,
      login,
      logout,
    };
  }, [token, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
