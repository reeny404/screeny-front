import Image from "next/image";

function Section3() {
  return (
    <section className="flex flex-col space-y-20">
      <div className="m-auto space-y-4 text-center">
        <h4 className="text-xs font-semibold text-[#9757D7]">
          좋은 레퍼런스로 디자인 강화하기
        </h4>
        <h2 className="text-4xl font-semibold leading-tight tracking-tighter">
          디자인을 강화할
          <br />
          준비가 되셨나요?
        </h2>
        <p className="pt-4 text-xs text-gray-400">
          Screeny와 함께 슈퍼 디자이너가 되어보세요!
        </p>
      </div>
      <Image
        src="/landing/My profile.png"
        className="mx-auto aspect-auto object-contain"
        width={375}
        height={800}
        alt="profile"
      />
    </section>
  );
}

export default Section3;
