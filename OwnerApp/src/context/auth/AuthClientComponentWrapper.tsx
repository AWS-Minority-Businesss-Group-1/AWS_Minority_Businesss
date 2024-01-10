"use client";

import { ReactNode, useEffect, useState } from "react";
import AuthContextProvider from "./AuthContextProvider";

interface AuthClientComponentWrapperProps {
  isAuthenticated: boolean;
  toggleAuthentication: () => void;
  children: ReactNode;
}

const AuthClientComponentWrapper: React.FC<AuthClientComponentWrapperProps> = ({
  children,
  isAuthenticated,
  toggleAuthentication,
}) => {
  // 'use client' directive to specify this is a Client Component
  // use client;

  console.log("AUTH CLIENT COMPONENT WRAPPER", isAuthenticated);

  // useEffect(() => {

  // }, [isAuthenticated]);

  return (
    <AuthContextProvider
      isAuthenticated={isAuthenticated}
      toggleAuthentication={toggleAuthentication}
    >
      {children}
    </AuthContextProvider>
  );
};

export default AuthClientComponentWrapper;
