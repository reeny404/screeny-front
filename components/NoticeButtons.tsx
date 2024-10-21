import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

function NoticeButtons({ className = "" }: Props) {
  return (
    <div
      className={clsx(
        "xs:text-sm space-x-4 font-bold sm:text-sm md:text-base-s",
        className
      )}
    >
      <button className="rounded-full border border-blue-500 bg-blue-500 px-4 py-3 hover:brightness-110">
        사전 등록하기
      </button>
      <Link
        href="https://tally.so/r/wo7YKe"
        className="rounded-full border border-gray-600 px-4 py-3 hover:brightness-75"
      >
        출시 알림받기
      </Link>
    </div>
  );
}

export default NoticeButtons;
