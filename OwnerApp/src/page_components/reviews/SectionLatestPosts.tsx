import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import Pagination from "@/shared/Pagination/Pagination";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import WidgetCategories from "./WidgetCategories";
import WidgetPosts from "./WidgetPosts";
import Card3 from "./Card3";
import { BusinessProfile } from "@/API";
import { individualReviewReturnType } from "@/utils/data/fetchBusinessReviews";

//
export interface SectionLatestPostsProps {
  className?: string;
  postCardName?: "card3";
  businessProfile: BusinessProfile | undefined;
  businessReviews: individualReviewReturnType[];
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  postCardName = "card3",
  className = "",
  businessReviews,
  businessProfile,
}) => {
  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          <Heading>My Reviews 🎈</Heading>
          <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
            {businessReviews.map((businessReview, index) => {
              return (
                <Card3
                  key={index}
                  className=""
                  businessName={businessProfile!.name}
                  reviewText={businessReview.text}
                  updatedAt={businessReview.updatedAt}
                  profilePicture={businessProfile!.profilePicture?.imageUrl}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
          <WidgetCategories businessReviews={businessReviews} />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
