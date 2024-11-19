import useRecentSearchStore from "@/store/RecentSearch.store";
import React, { useCallback } from "react";
import RoundButton from "./base/RoundButton";

type TrendsProps = {
  title: string;
  keywords: string[];
};

function Trends({ title, keywords }: TrendsProps) {
  const { addRecentSearch } = useRecentSearchStore();
  const handleAddRecentWord = useCallback(
    (word: string) => () => {
      addRecentSearch(word);
      close();
    },
    []
  );

  return (
    <div>
      <h5 className="pb-1 font-medium text-neutrals-5">{title}</h5>
      <div className="flex flex-wrap gap-x-1 gap-y-2.5">
        {keywords.map((keyword) => (
          <RoundButton
            key={keyword}
            onClick={handleAddRecentWord(keyword)}
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
