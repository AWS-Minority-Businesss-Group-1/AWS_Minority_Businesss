import React, { FC } from "react";
import UnauthenticatedMainNav from "./UnauthenticatedMainNav";

export interface Header2Props {}

const UnauthenticatedHeader: FC<Header2Props> = () => {
  return (
    <div className="nc-Header2 sticky top-0 w-full left-0 right-0 z-40 bg-white dark:bg-neutral-900 nc-header-bg shadow-sm dark:border-b dark:border-neutral-700">
      <UnauthenticatedMainNav />
    </div>
  );
};

export default UnauthenticatedHeader;
