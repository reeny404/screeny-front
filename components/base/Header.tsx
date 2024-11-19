import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

function Header({ children }: PropsWithChildren) {
  return (
    <header
      className={clsx(
        "flex w-full flex-row items-center justify-between",
        "mt-9 px-3.5 py-5",
        "bg-inherit md:static"
      )}
    >
      <Link href="/" className="flex text-3xl font-semibold md:text-2xl">
        <div className="relative hidden h-10 w-10 md:block">
          <Image src="/logo/screeny.png" fill alt="로고" />
        </div>
        Screeny
        <span className="text-carrot">.</span>
      </Link>
      {children}
    </header>
  );
}

export default Header;
