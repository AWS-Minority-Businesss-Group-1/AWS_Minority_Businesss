"use client";

import React from "react";
import SectionLatestPosts from "./SectionLatestPosts";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import { BusinessProfile } from "@/API";
import { individualReviewReturnType } from "@/utils/data/fetchBusinessReviews";

interface MyReviewsClientComponentProps {
  businessProfile: BusinessProfile | undefined;
  businessReviews: individualReviewReturnType[];
}

export default function MyReviewsClientComponent({
  businessProfile,
  businessReviews,
}: MyReviewsClientComponentProps) {
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      {/* ======== ALL SECTIONS ======== */}
      <div className="container relative">
        {/* === SECTION 8 === */}
        <SectionLatestPosts
          className="py-16 lg:py-28"
          businessProfile={businessProfile}
          businessReviews={businessReviews}
        />

        <div className="pb-16 lg:pb-28">
          <hr className="border-neutral-200 dark:border-neutral-700" />
        </div>
      </div>
    </div>
  );
}
