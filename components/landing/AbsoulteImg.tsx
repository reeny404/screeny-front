import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  className?: string;
  width?: number;
  height?: number;
};

function AbsoulteImg({ src, className, width = 20, height = 20 }: Props) {
  return (
    <div className="relative z-0 hidden h-0 w-full md:block">
      <Image
        src={src}
        alt="dot"
        width={width}
        height={height}
        className={clsx("absolute object-contain", className)}
      />
    </div>
  );
}

export default AbsoulteImg;
