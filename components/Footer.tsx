import Image from "next/image";
import { PropsWithChildren } from "react";

interface FooterProps {
  hasLogo?: boolean;
}

function Footer({
  hasLogo = false,
  children,
}: FooterProps & PropsWithChildren) {
  return (
    <footer className="relative bottom-6 mx-auto mt-6 flex w-[95%] flex-col py-20">
      <Image
        src="/landing/footer-bg.png"
        fill
        alt="gradient"
        className="object-fit z-0 opacity-30"
      />
      <div className="z-10 flex w-full flex-col items-center">
        {hasLogo && (
          <Image
            src="/logo.png"
            width={128}
            height={128}
            alt="logo"
            className="hidden md:block"
          />
        )}
        <div className="text-center">
          <h2 className="relative -top-3 text-4xl font-semibold">
            Screeny
            <span className="text-carrot">.</span>
          </h2>
          <h4 className="text-sm font-semibold tracking-tighter text-gray-200 md:text-base-l md:font-normal">
            새로운 디자인 레퍼런스 플랫폼
          </h4>
        </div>
        {children}
        <div className="mt-2 flex flex-col items-center space-y-4">
          <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-darkNavy">
            <Image
              src="/icons/instagram.svg"
              width={16}
              height={16}
              alt="instagram"
              className="m-4"
            />
          </button>
          <p className="text-sm text-gray-400">© 2024, Screeny.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
