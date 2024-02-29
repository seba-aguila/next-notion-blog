import React from "react";
import { cn } from "../../lib/utils";

interface BlurImageProps {
  src: string;
  className?: string;
}

export const BlurImage: React.FC<BlurImageProps> = ({ src, className }) => {
  // const buffer = await fetch(src).then(async (res) => {
  //   return Buffer.from(await res.arrayBuffer());
  // });
  // const { base64 } = await getPlaiceholder(buffer);

  return (
    <img
      alt="Blog Image"
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      className={cn("w-full h-auto rounded-md", className)}
    // placeholder="blur"
    // blurDataURL={base64}
    />
  );
};