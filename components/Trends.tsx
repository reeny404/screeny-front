import React from "react";
import RoundButton from "./base/RoundButton";
import Image from "next/image";

type TrendsProps = {
  title: string;
  keywords: string[];
  onClick: (text: string) => void;
  isAbleToRemoveWord: boolean;
};

function Trends({ title, keywords, onClick, isAbleToRemoveWord }: TrendsProps) {
  return (
    <div className="space-y-4">
      <h5 className="font-medium text-neutrals-5">{title}</h5>
      <div className="flex flex-wrap gap-x-1 gap-y-2.5 pb-6">
        {!keywords.length ? (
          <div className="flex h-12 w-full items-center justify-center text-neutrals-6">
            {title} 기록이 없습니다.
          </div>
        ) : (
          keywords.map((keyword) => (
            <RoundButton
              key={keyword}
              onClick={() => onClick(keyword)}
              className="flex items-center hover:bg-neutrals-4"
            >
              {keyword}
              {isAbleToRemoveWord && (
                <Image
                  src="/icons/close.svg"
                  width={20}
                  height={20}
                  alt="remove"
                  className="pl-1.5 text-neutrals-5"
                />
              )}
            </RoundButton>
          ))
        )}
      </div>
    </div>
  );
}

export default Trends;
