import { IS_OPEN } from "@/constants/env";
import { Input } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import refs from "@/data/references.json";

const WORDS = [
  "전체",
  "버튼",
  "플로팅 버튼",
  "체크박스",
  "라디오 버튼",
  "토글 스위치",
  "슬라이더",
];

const TEMP_REFS = refs;

function MainPage() {
  if (!IS_OPEN) {
    redirect("/kr");
  }

  return (
    <main className="px-3.5">
      <Input
        type="text"
        placeholder="컴포넌트를 검색해보세요."
        className="my-5 w-full rounded-full bg-nenutral-2 px-6 py-3"
      />
      <div className="flex w-full space-x-2 overflow-hidden text-base-s sm:max-w-screen-sm">
        {WORDS.map((text, i) => (
          <div
            key={i}
            className={clsx(
              "text-nowrap rounded-full border border-gray-600 px-3 py-2 font-semibold",
              i == 0 && "bg-white text-navy"
            )}
          >
            {text}
          </div>
        ))}
      </div>
      <article className="my-6 grid grid-cols-2 justify-center gap-4">
        {TEMP_REFS.map((ref) => (
          <div key={ref.appName} className="mx-auto space-y-2 overflow-hidden">
            <div className="flex flex-row space-x-2">
              <div className="h-9 w-9 rounded-lg bg-nenutral-8">
                {ref.appProfile && (
                  <Image
                    src={ref.appProfile}
                    alt="이미지"
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div>
                <div className="text-base-s font-bold">{ref.appName}</div>
                <div className="text-sm text-nenutral-7">{ref.appType}</div>
              </div>
            </div>
            <div className="grid w-full xs:grid-cols-1 md:grid-cols-3 md:gap-3.5">
              {ref.images.slice(0, 3).map((image, i) => (
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
    </main>
  );
}

export default MainPage;
