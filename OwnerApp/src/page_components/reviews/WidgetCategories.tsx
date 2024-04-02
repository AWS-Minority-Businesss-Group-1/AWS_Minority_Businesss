import CardCategory1 from "@/components/CardCategories/CardCategory1";
import React, { FC } from "react";
import WidgetHeading1 from "./WidgetHeading1";
import { individualReviewReturnType } from "@/utils/data/fetchBusinessReviews";

export interface WidgetCategoriesProps {
  className?: string;
  businessReviews: individualReviewReturnType[];
}

const WidgetCategories: FC<WidgetCategoriesProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  businessReviews,
}) => {
  let ONE_STAR = 0;
  let TWO_STARS = 0;
  let THREE_STARS = 0;
  let FOUR_STARS = 0;
  let FIVE_STARS = 0;

  let totalRating = 0;
  const numberOfReviews = businessReviews.length;

  const ratings = businessReviews.map((review) => {
    totalRating += review.rating;

    if (review.rating > 0 && review.rating <= 2) {
      ONE_STAR++;
    } else if (review.rating > 2 && review.rating <= 3) {
      TWO_STARS++;
    } else if (review.rating > 3 && review.rating <= 4) {
      THREE_STARS++;
    } else if (review.rating > 4 && review.rating <= 5) {
      FOUR_STARS++;
    } else if (review.rating > 4) {
      FIVE_STARS++;
    }
  });

  const averageRating = totalRating / numberOfReviews;

  return (
    <div
      className={`nc-WidgetCategories rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetCategories"
    >
      <WidgetHeading1
        title="Overall Rating"
        viewAll={{ label: "View all", href: "#" }}
        numberOfStars={averageRating}
        numberOfReviews={numberOfReviews}
      />
      <div className="flow-root">
        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={"FIVE_STARS"}
            name={5}
            numberOfStars={FIVE_STARS}
            numberOfReviews={numberOfReviews}
          />
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={"FOUR_STARS"}
            name={4}
            numberOfStars={FOUR_STARS}
            numberOfReviews={numberOfReviews}
          />
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={"THREE_STARS"}
            name={3}
            numberOfStars={THREE_STARS}
            numberOfReviews={numberOfReviews}
          />
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={"TWO_STARS"}
            name={2}
            numberOfStars={TWO_STARS}
            numberOfReviews={numberOfReviews}
          />
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={"ONE_STARS"}
            name={1}
            numberOfStars={ONE_STAR}
            numberOfReviews={numberOfReviews}
          />
        </div>
      </div>
    </div>
  );
};

export default WidgetCategories;
