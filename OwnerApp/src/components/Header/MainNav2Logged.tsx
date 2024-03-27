import React, { FC } from "react";
import Logo from "@/shared/Logo/Logo";
import MenuBar from "@/shared/MenuBar/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode/SwitchDarkMode";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "@/shared/Navigation/Navigation";

export interface MainNav2LoggedProps {}

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
  return (
    <div className={`nc-MainNav2Logged relative z-10`}>
      <div className="container">
        <div className="h-20 flex justify-between space-x-4 xl:space-x-8">
          <div className="self-center flex justify-start flex-grow space-x-3 sm:space-x-8 lg:space-x-10">
            <Logo />
          </div>
          <div className="flex-shrink-0 flex justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
            <div className="hidden xl:flex space-x-2">
              <Navigation />
              <div className="self-center hidden sm:block h-6 border-l border-neutral-300 dark:border-neutral-6000"></div>
              <div className="flex">
                <SwitchDarkMode />
              </div>
              <div></div>
              <AvatarDropdown />
            </div>
            <div className="flex items-center space-x-1 xl:hidden">
              <AvatarDropdown />
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2Logged;
