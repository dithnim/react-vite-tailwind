import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setLogin] = useState(false);

  const validUser = {
    username: "Dineth",
    password: "1298",
  };

  const login = ({ username, password }) => {
    if (username == validUser.username && password == validUser.password) {
      setUser(username);
      setPass(password);
      setLogin(true);
      setError("");
    } else {
      setLogin(false);
      setUser(null);
      setPass(null);
      setError("Invalid username or password");
    }
  };

  const logout = () => {
    setUser(null);
    setLogin(false);
    setPass(null);
  };

  return (
    <AuthContext.Provider value={{ user, pass, isLogin, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
