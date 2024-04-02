"use client";

import React from "react";
import logoImg from "@/images/logo.svg";
import logoLightImg from "@/images/logo-light.svg";
import Link from "next/link";
import Image from "next/image";
import { useThemeMode } from "@/hooks/useThemeMode";
import { useAuthContext } from "@/context/auth/AuthContext";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "flex-shrink-0",
}) => {
  const { user } = useAuthContext();
  const { isDarkMode } = useThemeMode();

  return (
    <Link
      href={user ? "/home" : "/"}
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
      {isDarkMode ? (
        <h1 className="text-white">Senior Project - Owner</h1>
      ) : (
        <h1>Senior Project - Owner</h1>
      )}
    </Link>
  );
};

export default Logo;
