"use client";
import NoticeButtons from "@/components/NoticeButtons";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "flex w-full flex-col items-center justify-between space-y-6 px-4 py-5 md:flex-row md:space-y-0 md:py-12 md:pl-28 md:pr-11",
        "fixed z-20 bg-inherit md:static",
        // "transition-all duration-300 ease-in-out",
        isScrolled ? "" : ""
      )}
    >
      <div className="flex text-3xl font-semibold md:text-[28px]">
        <div className="relative hidden h-10 w-10 md:block">
          <Image src="/logo.png" fill alt="로고" />
        </div>
        Screeny
        <span className="text-carrot">.</span>
      </div>
      <NoticeButtons />
    </header>
  );
}

export default Header;
