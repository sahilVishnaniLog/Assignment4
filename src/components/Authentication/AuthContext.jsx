import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const login = ({ username, password }) => {
    // Demo credentials: admin / 123
    // Replace with real backend API call later:
    // const res = await fetch('/api/login', { method: 'POST', body: JSON.stringify({username, password}) });
    if (username === "admin" && password === "123") {
      const userData = { username, id: 1 }; // Add more user data as needed
      setUser(userData);

      // Redirect to the page they originally wanted (or home)
      const redirectTo = location.state?.from?.pathname || "/board";
      navigate(redirectTo, { replace: true });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
