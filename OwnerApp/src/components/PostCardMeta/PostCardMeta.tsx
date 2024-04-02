import React, { FC } from "react";
import Avatar from "@/shared/Avatar/Avatar";
import { _getPersonNameRd } from "@/contains/fakeData";
import Link from "next/link";

export interface PostCardMetaProps {
  className?: string;
  hiddenAvatar?: boolean;
  updatedAt: number;
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none",
  hiddenAvatar = false,
  updatedAt,
}) => {
  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm ${className}`}
      data-nc-id="PostCardMeta"
    >
      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
        {new Date(updatedAt).toLocaleDateString()}{" "}
        {new Date(updatedAt).toLocaleTimeString()}
      </span>
    </div>
  );
};

export default PostCardMeta;
