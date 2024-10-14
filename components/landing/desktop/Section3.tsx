import Image from "next/image";

function Section3() {
  return (
    <section className="flex flex-col space-y-20">
      <div className="m-auto space-y-4 text-center">
        <h4 className="font-semibold text-[#9757D7] md:text-base-s">
          좋은 레퍼런스로 디자인 강화하기
        </h4>
        <h2 className="text-5xl font-semibold leading-tight tracking-tighter md:text-4xl">
          디자인을 강화할
          <br />
          준비가 되셨나요?
        </h2>
        <p className="pt-4 text-gray-400 md:pt-3 lg:text-base-l">
          Screeny와 함께 슈퍼 디자이너가 되어보세요!
        </p>
      </div>
      <Image
        src="/landing/phone-desk.png"
        className="relative -top-52 mx-auto object-contain md:-top-36"
        width={1440}
        height={1150}
        alt="profile"
      />
    </section>
  );
}

export default Section3;
