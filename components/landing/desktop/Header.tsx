import Image from "next/image";
import NoticeButtons from "../../NoticeButtons";

function Header() {
  return (
    <header className="fixed z-20 flex w-full flex-col items-center justify-between space-y-6 bg-inherit py-5 md:static md:flex-row md:py-12 md:pl-28 md:pr-11">
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
