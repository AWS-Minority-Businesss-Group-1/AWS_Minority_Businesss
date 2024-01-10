"use client";

import { createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  toggleAuthentication: () => {},
});

export default AuthContext;
