"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import HeaderLogged from "@/components/Header/HeaderLogged";
import Header2 from "@/components/Header/Header2";
import UnauthenticatedHeader from "@/components/Header/UnauthenticatedHeader";

const UnauthenticatedSiteHeader = () => {
  // let pathname = usePathname();

  // const headerComponent = useMemo(() => {
  //   let HeadComponent = HeaderLogged;

  //   switch (pathname) {
  //     case "/home-3":
  //       HeadComponent = Header2;
  //       break;

  //     default:
  //       break;
  //   }

  //   return <HeadComponent />;
  // }, [pathname]);

  // return <>{headerComponent}</>;

  return <UnauthenticatedHeader />;
};

export default UnauthenticatedSiteHeader;
