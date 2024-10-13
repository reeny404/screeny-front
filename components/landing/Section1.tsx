"use client";

import clsx from "clsx";
import Image from "next/image";
import AbsoulteImg from "./AbsoulteImg";

const ComponentTypes = [
  "카드",
  "플로팅 버튼",
  "체크박스",
  "라디오 버튼",
  "토글 스위치",
  "슬라이더",
];

function Section1() {
  return (
    <section className="grid grid-flow-col grid-cols-2 py-16 pl-16">
      <div className="space-y-10">
        <div>
          <AbsoulteImg
            src="/landing/dot 04.png"
            className="-top-12 left-80"
            width={32}
            height={32}
          />
          <AbsoulteImg src="/landing/dot 03.png" className="-left-20 top-44" />
          <h1 className="text-[60px] font-bold leading-snug tracking-tighter md:text-3xl md:leading-normal">
            UI 디자인
            <br /> 컴포넌트 별로
            <br /> 정확한 레퍼런스 찾기
          </h1>
        </div>
        <p className="text-base-l leading-relaxed tracking-tighter text-gray-400">
          UI 디자인 레퍼런스를 앱별, 컴포넌트별로 <br />
          빠르고 정확하게 제공하는 Screeny. <br />
          디자이너의 시간을 절약하는 스마트한 솔루션.
          <br />
          지금 사전 등록하고 얼리 유저 혜택을 받아보세요!
        </p>
        <div className="space-x-4 text-sm">
          <button className="rounded-full border border-blue-500 bg-blue-500 px-4 py-3 hover:brightness-110">
            사전 등록하기
          </button>
          <button className="rounded-full border border-gray-600 px-4 py-3 hover:brightness-75">
            출시 알림받기
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="w-full">
          <div className="min-w-[562px] overflow-hidden">
            <div className="text-base-s flex w-full space-x-2">
              {ComponentTypes.map((text, i) => (
                <div
                  key={i}
                  className={clsx(
                    "rounded-full border border-gray-600 px-3 py-2 font-semibold",
                    i == 0 && "bg-white text-navy"
                  )}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image
          src="/landing/search-card.png"
          alt="search-card-example"
          width={654}
          height={444}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default Section1;
