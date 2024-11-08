"use client";
import Image from "next/image";
import AbsoulteImg from "../../../../../components/landing/AbsoulteImg";
import NoticeButtons from "@/components/NoticeButtons";
import RoundButton from "@/components/base/RoundButton";

function Section1() {
  return (
    <section className="grid space-y-10 md:grid-flow-col md:grid-cols-2 md:space-y-0 md:py-16 md:pl-16">
      <div className="sm:space-y-4 md:space-y-10">
        <div>
          <AbsoulteImg
            src="/landing/dot 04.png"
            className="-top-12 left-80 hidden md:block"
            width={32}
            height={32}
          />
          <AbsoulteImg
            src="/landing/dot 03.png"
            className="-left-20 top-44 hidden md:block"
          />
          <h1 className="text-3xl font-bold leading-snug tracking-tighter md:leading-normal lg:text-[60px]">
            UI 디자인
            <br /> 컴포넌트 별로
            <br /> 정확한 레퍼런스 찾기
          </h1>
        </div>
        <p className="leading-relaxed tracking-tighter text-gray-400 sm:text-base-s lg:text-base-l">
          UI 디자인 레퍼런스를 앱별, 컴포넌트별로 <br />
          빠르고 정확하게 제공하는 Screeny. <br />
          디자이너의 시간을 절약하는 스마트한 솔루션.
          <br />
          지금 사전 등록하고 얼리 유저 혜택을 받아보세요!
        </p>
        <NoticeButtons className="hidden md:block" />
      </div>
      <div className="flex flex-col space-y-5 md:space-y-8">
        <div className="overflow-hidden xs:w-screen md:max-w-[45.5vw]">
          <div className="flex w-full space-x-2 px-5 text-base-s">
            <RoundButton isPressed>카드</RoundButton>
            <RoundButton>플로팅 버튼</RoundButton>
            <RoundButton>체크박스</RoundButton>
            <RoundButton>라디오 버튼</RoundButton>
            <RoundButton>토글 스위치</RoundButton>
            <RoundButton>슬라이더</RoundButton>
          </div>
        </div>
        <div className="relative h-72 w-full lg:h-[444px]">
          <Image
            src="/landing/search-card.png"
            alt="search-card-example"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
