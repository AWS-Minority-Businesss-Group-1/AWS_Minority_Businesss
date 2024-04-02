import { set } from "lodash";
import React, { createContext, useState, useEffect, useContext } from "react";
import { getCurrentUser } from "@aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

interface BusinessProfilePicture {
  imageUrl: string;
  createdAt: number;
  fileName: string;
}

interface BusinessProfilePictureContextElements {
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  createdAt: number;
  setCreatedAt: React.Dispatch<React.SetStateAction<number>>;
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  businessNameContext: string;
  setBusinessNameContext: React.Dispatch<React.SetStateAction<string>>;
}

const BusinessProfilePictureContext =
  createContext<BusinessProfilePictureContextElements>({
    imageUrl: "",
    setImageUrl: () => {},
    createdAt: 0,
    setCreatedAt: () => {},
    fileName: "",
    setFileName: () => {},
    businessNameContext: "",
    setBusinessNameContext: () => {},
  });

export function useBusinessProfilePictureContext() {
  return useContext(BusinessProfilePictureContext);
}

export const BusinessProfilePictureProvider = ({ children }: any) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<number>(0);
  const [fileName, setFileName] = useState<string>("");
  const [businessNameContext, setBusinessNameContext] = useState<string>("");

  return (
    <BusinessProfilePictureContext.Provider
      value={{
        imageUrl,
        setImageUrl,
        createdAt,
        setCreatedAt,
        fileName,
        setFileName,
        businessNameContext,
        setBusinessNameContext,
      }}
    >
      {children}
    </BusinessProfilePictureContext.Provider>
  );
};
