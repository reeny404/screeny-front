import Image from "next/image";

function Section3() {
  return (
    <section className="flex flex-col space-y-20 py-16 md:py-0">
      <div className="m-auto space-y-4 text-center">
        <h4 className="text-[15px] font-bold text-[#9757D7] md:text-base-s md:font-semibold">
          좋은 레퍼런스로 디자인 강화하기
        </h4>
        <h2 className="text-3xl font-bold leading-snug tracking-tighter md:text-4xl md:font-semibold md:leading-tight lg:text-5xl">
          디자인을 강화할
          <br />
          준비가 되셨나요?
        </h2>
        <p className="pt-4 text-gray-400 md:pt-3 lg:text-base-l">
          Screeny와 함께 슈퍼 디자이너가 되어보세요!
        </p>
      </div>
      <Image
        src="/landing/phone-desktop.png"
        className="relative -top-36 mx-auto hidden object-contain md:block"
        width={1440}
        height={1150}
        alt="desktop-profile"
      />
      <Image
        src="/landing/phone-mobile.png"
        className="relative -top-28 mx-auto block aspect-auto object-contain md:hidden"
        width={626}
        height={902}
        alt="mobile-profile"
      />
    </section>
  );
}

export default Section3;
