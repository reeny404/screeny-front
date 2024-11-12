"use client";
import { IS_OPEN } from "@/constants/env";
import { Input } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import refs from "@/data/references.json";
import RoundButton from "../../../../components/base/RoundButton";

type Filter = { [text: string]: boolean };
const initialFilter: Filter = {
  버튼: false,
  "플로팅 버튼": false,
  체크박스: false,
  "라디오 버튼": false,
  "토글 스위치": false,
  슬라이더: false,
};

const TEMP_REFS = refs;

function MainPage() {
  if (!IS_OPEN) {
    redirect("/kr");
  }

  const [filter, setFilter] = useState<Filter>(initialFilter);
  const handleClickType = useCallback(
    (word: string) => () => {
      setFilter((prevFilter) => ({ ...prevFilter, [word]: !prevFilter[word] }));
    },
    []
  );
  const hasSelectedButton = useMemo(() => {
    return Object.keys(filter).find((key) => filter[key]);
  }, [filter]);

  return (
    <div className="px-3.5">
      <Input
        autoFocus
        type="text"
        placeholder="컴포넌트를 검색해보세요."
        className="my-5 w-full rounded-full bg-nenutral-2 px-6 py-3"
      />
      <div className="flex w-full space-x-2 overflow-hidden text-base-s">
        <RoundButton className="hidden md:block" isPressed>
          <div className="flex space-x-2 pr-4">
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
          <span className="my-1.5 border-r border-r-nenutral-5" />
        </span>
        <RoundButton
          isPressed={!hasSelectedButton}
          onClick={() => setFilter(initialFilter)}
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
      <article className="my-6 grid grid-cols-2 justify-center gap-x-4 gap-y-6">
        {TEMP_REFS.map(({ appName, appProfile, appType, images }) => (
          <div key={appName} className="mx-auto space-y-2 overflow-hidden">
            <header className="flex flex-row space-x-2">
              <div className="h-9 w-9 rounded-lg bg-nenutral-8">
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
                <div className="text-sm text-nenutral-7">{appType}</div>
              </div>
            </header>
            <div className="grid w-full xs:grid-cols-1 md:grid-cols-3 md:gap-3.5">
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
            </div>
          </div>
        ))}
      </article>
    </div>
  );
}

export default MainPage;
