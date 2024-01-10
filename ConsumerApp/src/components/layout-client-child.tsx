"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/shared/Footer/Footer";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import SiteHeader from "@/app/SiteHeader";
import UnauthenticatedSiteHeader from "../app/UnauthenticatedSiteHeader";
import AuthClientComponentWrapper from "@/context/auth/AuthClientComponentWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

interface LayoutChildProps {
  children: ReactNode;
}

const LayoutClientChild: React.FC<LayoutChildProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    typeof window !== "undefined" &&
      window.sessionStorage.getItem("isAuthenticated") === "true"
  );

  if (
    typeof window !== "undefined" &&
    !window.sessionStorage.getItem("isAuthenticated")
  ) {
    window.sessionStorage.setItem("isAuthenticated", "false");
  }

  const toggleAuthentication = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("isAuthenticated", isAuthenticated.toString());
    }
  }, [isAuthenticated]);

  return (
    <AuthClientComponentWrapper
      isAuthenticated={isAuthenticated}
      toggleAuthentication={toggleAuthentication}
    >
      <html lang="en" className={poppins.className}>
        <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
          {isAuthenticated ? <SiteHeader /> : <UnauthenticatedSiteHeader />}
          {children}
          <Footer />
          <MusicPlayer />
        </body>
      </html>
    </AuthClientComponentWrapper>
  );
};

export default LayoutClientChild;
