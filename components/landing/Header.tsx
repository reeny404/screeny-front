import clsx from "clsx";
import Image from "next/image";
import { PropsWithChildren } from "react";

function Header({ children }: PropsWithChildren) {
  return (
    <header
      className={clsx(
        "flex w-full flex-col items-center justify-between space-y-6 px-4 py-5 md:flex-row md:space-y-0 md:py-12 md:pl-28 md:pr-11",
        "bg-inherit xs:fixed xs:z-20 md:static"
        // "transition-all duration-300 ease-in-out",
      )}
    >
      <div className="flex text-3xl font-semibold md:text-[28px]">
        <div className="relative hidden h-10 w-10 md:block">
          <Image src="/logo/screeny.png" fill alt="로고" />
        </div>
        Screeny
        <span className="text-carrot">.</span>
      </div>
      {children}
    </header>
  );
}

export default Header;
