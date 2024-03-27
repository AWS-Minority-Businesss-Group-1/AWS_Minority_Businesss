"use client";

import React, { FC, useEffect, useState } from "react";
import Avatar from "@/shared/Avatar/Avatar";
import NcImage from "@/shared/NcImage/NcImage";
import ItemTypeImageIcon from "./ItemTypeImageIcon";
import LikeButton from "./LikeButton";
import Prices from "./Prices";
import { ClockIcon } from "@heroicons/react/24/outline";
import ItemTypeVideoIcon from "./ItemTypeVideoIcon";
import Link from "next/link";
import useGetRandomData from "@/hooks/useGetRandomData";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";

export interface CardNFTProps {
  className?: string;
  isLiked?: boolean;
  imageUrl: string;
  onDelete?: () => void;
}

const CardNFT: FC<CardNFTProps> = ({
  className = "",
  isLiked,
  imageUrl,
  onDelete,
}) => {
  return (
    <div className={`nc-CardNFT relative flex flex-col group ${className}`}>
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0 rounded-3xl overflow-hidden z-0"
            src={imageUrl}
            className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
          />
        </div>
      </div>

      <div className="px-2 py-5 space-y-3">
        <ButtonPrimary className="bg-red-500" onClick={onDelete}>
          Delete
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default CardNFT;
