import { _getImgRd, _getTagNameRd } from "@/contains/fakeData";
import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import Link from "next/link";
import { StaticImageData } from "next/image";
import LinearProgressWithLabel from "../LinearProgressWithLabel";

export interface CardCategory1Props {
  className?: string;
  size?: "large" | "normal";
  name: number;
  numberOfStars: number;
  numberOfReviews: number;
}

const CardCategory1: FC<CardCategory1Props> = ({
  className = "",
  size = "normal",
  name,
  numberOfStars,
  numberOfReviews,
}) => {
  return (
    <div className={`nc-CardCategory1 flex items-center ${className}`}>
      <div>
        <h2
          className={`${
            size === "large" ? "text-lg" : "text-base"
          } nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {`${name} star${name === 1 ? "" : "s"}`}
        </h2>
      </div>
      <div style={{ width: "100%" }}>
        <LinearProgressWithLabel
          variant="determinate"
          value={(numberOfStars / numberOfReviews) * 100}
        />
      </div>
    </div>
  );
};

export default CardCategory1;
