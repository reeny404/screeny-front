import Image from "next/image";

function Header() {
  return (
    <header className="flex w-full justify-between px-28 py-12">
      <div className="flex text-[28px] font-semibold">
        <Image src="/logo.png" width={40} height={40} alt="로고" />
        Screeny
        <span className="text-carrot">.</span>
      </div>
      <div className="space-x-4 text-sm">
        <button className="rounded-full border border-blue-500 bg-blue-500 px-4 py-3 hover:brightness-110">
          사전 등록하기
        </button>
        <button className="rounded-full border border-gray-600 px-4 py-3 hover:brightness-75">
          출시 알림받기
        </button>
      </div>
    </header>
  );
}

export default Header;
