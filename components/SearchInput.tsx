"use client";
import useRecentSearchStore from "@/store/RecentSearch.store";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SearchMenu from "./SearchMenu";
import InputDebounced from "./base/InputDebounced";

function SearchInput() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { addRecentSearch } = useRecentSearchStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-20 w-full transition-all">
      <div
        className={clsx(
          "flex flex-col rounded-3xl transition-transform",
          isDropdownOpen ? "bg-neutrals-1" : "h-12 bg-inherit"
        )}
      >
        <div
          className={clsx(
            "mt-2 flex rounded-full pr-6",
            isDropdownOpen ? "mx-1 bg-neutrals-2" : "bg-neutrals-2"
          )}
        >
          <InputDebounced
            autoComplete="off"
            placeholder="컴포넌트를 검색해보세요."
            className="mx-6 my-3 w-full bg-inherit outline-none"
            onChange={(e) => addRecentSearch(e.target.value)}
            onFocus={() => setIsDropdownOpen(true)}
          />
          <Image src="/icons/search.svg" alt="lens" width={22} height={22} />
        </div>
        {isDropdownOpen && (
          <SearchMenu close={() => setIsDropdownOpen(false)} />
        )}
      </div>
    </div>
  );
}
export default SearchInput;
