import React, { FC } from "react";

export interface SectionHero2Props {
  children?: React.ReactNode;
  className?: string;
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "", children }) => {
  return (
    <div
      className={`nc-SectionHero2 flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-36 xl:pb-60 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%] ">
            Unlock the Potential of Your Business 🚀
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Empower Your Minority-Owned Business and Connect with a Wider
            Audience
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
