import { CustomLink } from "@/data/types";
import Link from "next/link";
import React, { FC } from "react";
import Rating from "@mui/material/Rating";

export interface WidgetHeading1Props {
  className?: string;
  title: string;
  viewAll: CustomLink;
  numberOfStars?: number;
  numberOfReviews?: number;
}

const WidgetHeading1: FC<WidgetHeading1Props> = ({
  className = "",
  title,
  viewAll,
  numberOfStars = 0,
  numberOfReviews = 0,
}) => {
  return (
    <div
      className={`nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ${className}`}
    >
      <h2 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
        {title}
      </h2>
      <div>
        <Rating
          name="half-rating-read"
          value={numberOfStars ? numberOfStars : 0}
          precision={0.5}
          readOnly
        />
      </div>
      <p>{`${numberOfReviews} review${numberOfReviews === 1 ? "" : "s"}`}</p>
    </div>
  );
};

export default WidgetHeading1;
