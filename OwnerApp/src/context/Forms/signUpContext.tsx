"use client";

import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

interface SignupContextElements {
  page: "FIRST" | "SECOND";
  setPage: React.Dispatch<React.SetStateAction<"FIRST" | "SECOND">>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  businessName: string;
  setBusinessName: React.Dispatch<React.SetStateAction<string>>;
  businessState: string;
  setBusinessState: React.Dispatch<React.SetStateAction<string>>;
  businessLicenceNumber: string;
  setBusinessLicenceNumber: React.Dispatch<React.SetStateAction<string>>;
}

const Context = createContext<SignupContextElements>({
  page: "FIRST",
  setPage: () => {},
  userName: "",
  setUserName: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  phoneNumber: "",
  setPhoneNumber: () => {},
  businessName: "",
  setBusinessName: () => {},
  businessState: "",
  setBusinessState: () => {},
  businessLicenceNumber: "",
  setBusinessLicenceNumber: () => {},
});

export function useSignupContext() {
  return useContext(Context);
}

export function SignupProvider({ children }: { children: any }) {
  const [page, setPage] = useState<"FIRST" | "SECOND">("FIRST");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessState, setBusinessState] = useState("");
  const [businessLicenceNumber, setBusinessLicenceNumber] = useState("");

  return (
    <Context.Provider
      value={{
        page,
        setPage,
        userName,
        setUserName,
        email,
        setEmail,
        password,
        setPassword,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        phoneNumber,
        setPhoneNumber,
        businessName,
        setBusinessName,
        businessState,
        setBusinessState,
        businessLicenceNumber,
        setBusinessLicenceNumber,
      }}
    >
      {children}
    </Context.Provider>
  );
}
