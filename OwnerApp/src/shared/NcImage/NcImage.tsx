"use client";

import React, { FC } from "react";
import Image, { ImageProps } from "next/image";
import { usePathname } from "next/navigation";

export interface NcImageProps extends Omit<ImageProps, "alt"> {
  containerClassName?: string;
  alt?: string;
}

export default function NcImage({
  containerClassName = "relative",
  alt = "nc-imgs",
  src,
  fill,
  className = "object-cover w-full h-full",
  sizes = "(max-width: 600px) 480px, 800px",
  ...args
}: NcImageProps) {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/" ? (
        <div className={containerClassName}>
          {src ? (
            <Image
              className={className}
              alt={alt}
              sizes={sizes}
              {...args}
              src={src}
              fill={fill}
            />
          ) : null}
        </div>
      ) : (
        <div className={containerClassName}>
          {src ? (
            <Image
              className={className}
              alt={alt}
              {...args}
              src={src}
              layout="fill"
              objectFit="contain"
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
