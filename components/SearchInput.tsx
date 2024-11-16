"use client";
import { INITIAL_FILTER } from "@/types/Filter";
import { Field, Input } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

// const RECENTS_WORDS: string[] = Object.keys(INITIAL_FILTER).slice(0, 3);

function SearchInput() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchWord, setSearchWord] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // TODO 세션 이용한 최근검색어 기능 추가
  // const [recentWords, setRecentWords] = useState<string[]>(RECENTS_WORDS);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchWord(value);
  };

  const handleClickWord = useCallback((search: string) => {
    setSearchWord(search);
    setIsDropdownOpen(false);
  }, []);

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
    <div ref={containerRef} className="relative mb-1 h-16 w-full">
      <Field
        className={clsx(
          "flex flex-col rounded-3xl transition-transform",
          isDropdownOpen ? "bg-neutrals-4" : "h-12 bg-inherit"
        )}
      >
        <div className={clsx("bg-neutrals-2 mx-2.5 mt-1 flex rounded-full")}>
          <Input
            placeholder="컴포넌트를 검색해보세요."
            className="mx-6 my-3 w-full bg-inherit outline-none"
            onChange={handleInputChange}
            onFocus={() => setIsDropdownOpen(true)}
            value={searchWord}
          ></Input>
          <Image
            src="/icons/search.svg"
            alt="lens"
            width={22}
            height={22}
            className="mr-6"
          />
        </div>
        {isDropdownOpen && (
          <ul className="w-full rounded">
            {Object.keys(INITIAL_FILTER).map((search, index) => (
              // TODO 트랜딩, UI Component 검색 내부 UI 구현 필요
              <li
                key={index}
                onClick={() => handleClickWord(search)}
                className="hover:bg-neutrals-5 cursor-pointer px-4 py-2"
              >
                {search}
              </li>
            ))}
          </ul>
        )}
      </Field>
    </div>
  );
}
export default SearchInput;
