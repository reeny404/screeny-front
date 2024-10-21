import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

function NoticeButtons({ className = "" }: Props) {
  return (
    <div
      className={clsx("space-x-4 text-sm font-bold md:text-base-s", className)}
    >
      <Link
        href="http://ec2-54-180-152-42.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google"
        className="rounded-full border border-blue-500 bg-blue-500 px-4 py-3 hover:brightness-110"
      >
        사전 등록하기
      </Link>
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
