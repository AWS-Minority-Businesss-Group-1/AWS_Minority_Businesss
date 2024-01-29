import React, { createContext, useState, useEffect, useContext } from "react";
import { getCurrentUser } from "@aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

// I copied this from AWS
// cause I'm not sure how to import it
interface AuthUser {
  username: string;
  userId: string;
}

interface AuthContextElements {
  user: AuthUser | undefined;
}

const AuthContext = createContext<AuthContextElements>({
  user: undefined,
});

export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<AuthUser | undefined>(undefined);

  useEffect(() => {
    // Check user status when component mounts
    checkUser();

    // Set up listeners for login/logout events
    const listener = Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signedIn":
          setUser(data.payload.data);
          break;
        case "signedOut":
          setUser(undefined);
          break;
        default:
          break;
      }
    });

    // Clean up listener
    return () => listener();
  }, []);

  // Function to check user status
  const checkUser = async () => {
    try {
      const userData = await getCurrentUser();
      setUser(userData);
    } catch (e) {
      setUser(undefined);
    }
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
