import React from "react";
import RoundButton from "./base/RoundButton";

type TrendsProps = {
  title: string;
  keywords: string[];
  onClick: (text: string) => void;
};

function Trends({ title, keywords, onClick }: TrendsProps) {
  return (
    <div>
      <h5 className="pb-1 font-medium text-neutrals-5">{title}</h5>
      <div className="flex flex-wrap gap-x-1 gap-y-2.5">
        {keywords.map((keyword) => (
          <RoundButton
            key={keyword}
            onClick={() => onClick(keyword)}
            className="hover:bg-neutrals-4"
          >
            {keyword}
          </RoundButton>
        ))}
      </div>
    </div>
  );
}

export default Trends;
