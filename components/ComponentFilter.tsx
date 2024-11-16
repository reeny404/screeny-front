"use client";
import React, { useCallback, useMemo, useState } from "react";
import RoundButton from "./base/RoundButton";
import Image from "next/image";
import { Filter, INITIAL_FILTER } from "@/types/Filter";

// type ComponentFilterProps = {};
// function ComponentFilter({}: ComponentFilterProps) {
function ComponentFilter() {
  const [filter, setFilter] = useState<Filter>(INITIAL_FILTER);
  const hasSelectedButton = useMemo(() => {
    return Object.keys(filter).find((key) => filter[key]);
  }, [filter]);

  const handleClickType = useCallback(
    (word: string) => () => {
      setFilter((prevFilter) => ({ ...prevFilter, [word]: !prevFilter[word] }));
    },
    []
  );
  return (
    <div className="flex w-full space-x-2 overflow-hidden text-base-s">
      <RoundButton className="hidden md:block" isPressed>
        <div className="flex space-x-2">
          <span>필터</span>
          <Image
            alt="filterIcon"
            width={16}
            height={16}
            src="/icons/tuning.svg"
          />
        </div>
      </RoundButton>
      <span className="hidden px-3 md:flex">
        <span className="border-r-neutrals-5 my-1.5 border-r" />
      </span>
      <RoundButton
        isPressed={!hasSelectedButton}
        onClick={() => setFilter(INITIAL_FILTER)}
      >
        전체
      </RoundButton>
      {Object.keys(filter).map((text) => (
        <RoundButton
          key={text}
          isPressed={filter[text]}
          onClick={handleClickType(text)}
        >
          {text}
        </RoundButton>
      ))}
    </div>
  );
}

export default ComponentFilter;
