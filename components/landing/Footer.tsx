import Image from "next/image";

function Footer() {
  return (
    <footer className="relative bottom-4 mx-auto flex w-[95%] flex-col py-20">
      <Image
        src="/landing/footer-bg.png"
        fill
        alt="gradient"
        className="object-fit z-0 opacity-30"
      />
      <div className="z-10 flex w-full flex-col items-center">
        <Image
          src="/logo.png"
          width={128}
          height={128}
          alt="logo"
          className=""
        />
        <div className="pb-6 text-center">
          <h2 className="relative -top-3 text-2xl font-semibold">
            Screeny
            <span className="text-carrot">.</span>
          </h2>
          <h4 className="text-xs tracking-tighter text-gray-200">
            새로운 디자인 레퍼런스 플랫폼
          </h4>
        </div>
        <div className="space-x-4 text-sm">
          <button className="rounded-full border border-blue-500 bg-blue-500 px-4 py-2 hover:brightness-125">
            사전 등록하기
          </button>
          <button className="rounded-full border-2 border-[#777E90] px-4 py-2 hover:brightness-125">
            출시 알림받기
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 pt-8">
          <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-dark-navy-200">
            <Image
              src="/icons/instagram.svg"
              width={16}
              height={16}
              alt="instagram"
              className="m-4"
            />
          </button>
          <p className="text-xs text-gray-400">© 2024, Screeny.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
