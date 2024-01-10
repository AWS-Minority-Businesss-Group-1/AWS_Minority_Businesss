import React, { ReactNode } from "react";
import AuthContext from "./AuthContext";

interface AuthContextProviderProps {
  isAuthenticated: boolean;
  toggleAuthentication: () => void;
  children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  isAuthenticated,
  toggleAuthentication,
  children,
}) => {
  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
