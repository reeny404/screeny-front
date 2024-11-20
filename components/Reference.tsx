import { Reference as TRef } from "@/types/Reference";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type ReferenceProps = {
  value: TRef;
};

function Reference({ value }: ReferenceProps) {
  const { appName, appProfile, appType, images } = value;

  return (
    <div key={appName} className="mx-auto space-y-2 overflow-hidden">
      <div className="flex flex-row space-x-2">
        <div className="bg-neutrals-8 h-9 w-9 rounded-lg">
          {appProfile && (
            <Image
              src={appProfile}
              alt="이미지"
              fill
              className="object-contain"
            />
          )}
        </div>
        <div>
          <div className="text-base-s font-bold">{appName}</div>
          <div className="text-neutrals-7 text-sm">{appType}</div>
        </div>
      </div>
      <figure className="grid w-full xs:grid-cols-1 md:grid-cols-3 md:gap-3.5">
        {images.slice(0, 3).map((image, i) => (
          <Image
            key={i}
            src={image}
            alt="이미지"
            sizes="full"
            width={0}
            height={0}
            className={clsx(
              "h-full w-full rounded-lg object-contain",
              i !== 0 && "xs:hidden md:block"
            )}
          />
        ))}
      </figure>
    </div>
  );
}

export default Reference;
