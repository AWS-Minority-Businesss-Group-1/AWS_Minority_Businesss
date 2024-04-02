import CardCategory1 from "@/components/CardCategories/CardCategory1";
import React, { FC } from "react";
import WidgetHeading1 from "./WidgetHeading1";

const exampleNumberOfReviews = 2123;

const exampleRatings = {
  FIVE_STARS: 500,
  FOUR_STARS: 300,
  THREE_STARS: 700,
  TWO_STARS: 300,
  ONE_STAR: 323,
};

export interface WidgetCategoriesProps {
  className?: string;
}

const WidgetCategories: FC<WidgetCategoriesProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
}) => {
  return (
    <div
      className={`nc-WidgetCategories rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetCategories"
    >
      <WidgetHeading1
        title="Overall Rating"
        viewAll={{ label: "View all", href: "/#" }}
        numberOfStars={3.5}
        numberOfReviews={exampleNumberOfReviews}
      />
      <div className="flow-root">
        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={"FIVE_STARS"}
            name={5}
            numberOfStars={exampleRatings.FIVE_STARS}
            numberOfReviews={exampleNumberOfReviews}
          />
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={"FOUR_STARS"}
            name={4}
            numberOfStars={exampleRatings.FOUR_STARS}
            numberOfReviews={exampleNumberOfReviews}
          />
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={"THREE_STARS"}
            name={3}
            numberOfStars={exampleRatings.THREE_STARS}
            numberOfReviews={exampleNumberOfReviews}
          />
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={"TWO_STARS"}
            name={2}
            numberOfStars={exampleRatings.TWO_STARS}
            numberOfReviews={exampleNumberOfReviews}
          />
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={"ONE_STARS"}
            name={1}
            numberOfStars={exampleRatings.ONE_STAR}
            numberOfReviews={exampleNumberOfReviews}
          />
        </div>
      </div>
    </div>
  );
};

export default WidgetCategories;
