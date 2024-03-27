import React, { FC } from "react";
import Logo from "@/shared/Logo/Logo";
import SwitchDarkMode from "@/shared/SwitchDarkMode/SwitchDarkMode";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import { usePathname } from "next/navigation";
import MenuBar from "@/shared/MenuBar/MenuBar";

export interface UnauthenticatedMainNavProps {}

const UnauthenticatedMainNav: FC<UnauthenticatedMainNavProps> = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <div className={`nc-MainNav2 relative z-10`}>
      <div className="container">
        <div className="h-20 flex justify-between space-x-4 xl:space-x-8">
          <div className="self-center flex justify-start flex-grow space-x-3 sm:space-x-8 lg:space-x-10">
            <Logo />
          </div>
          <div className="flex-shrink-0 flex justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
            <div className="hidden items-center xl:flex space-x-2">
              <ButtonPrimary
                href={isLoginPage ? "/signup" : "/login"}
                sizeClass="px-4 py-2 sm:px-5"
              >
                {isLoginPage ? "Sign Up" : "Log In"}
              </ButtonPrimary>
              <SwitchDarkMode />
            </div>
          </div>
          <div className="flex items-center space-x-1 xl:hidden">
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthenticatedMainNav;
