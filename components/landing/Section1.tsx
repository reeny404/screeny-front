import clsx from "clsx";
import Image from "next/image";

function Section1() {
  return (
    <section className="grid grid-flow-col grid-cols-2 py-16 pl-16">
      <div className="space-y-10">
        <h1 className="text-[56px] font-bold leading-snug tracking-tighter">
          UI 디자인
          <br /> 컴포넌트 별로
          <br /> 정확한 레퍼런스 찾기
        </h1>
        <p className="tracking-tighter text-gray-400">
          지금까지 디자인 레퍼런스를 찾기 위해 <br />
          구글과 핀트레스트에 많은 시간을 투자하셨나요? <br />
          또는 앱을 매번 다운 받으면서 화면들을 확인해보셨나요? <br />
          내가 찾는 UI 디자인을 앱별로, 컴포넌트별로 정확히 모아서 찾아주는
          Screeny <br />
          레퍼런스 찾는 시간을 아껴주는 편리한 서비스
          <br />
          지금 사전등록하고 얼리유저 혜택을 받아보세요!
        </p>
        <div className="space-x-4 text-sm">
          <button className="rounded-full border border-blue-500 bg-blue-500 px-4 py-3 hover:brightness-125">
            사전 등록하기
          </button>
          <button className="rounded-full border border-gray-600 px-4 py-3 hover:brightness-75">
            출시 알림받기
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex space-x-2 text-sm">
          {[
            "카드",
            "플로팅 버튼",
            "체크박스",
            "라디오 버튼",
            "토글 스위치",
            "슬라이더",
          ].map((text, i) => {
            return (
              <div
                key={i}
                className={clsx(
                  "rounded-full border border-gray-600 px-3 py-2 font-semibold",
                  i == 0 && "bg-white text-navy"
                )}
              >
                {text}
              </div>
            );
          })}
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/landing/search-card.png"
            alt="search-card-example"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
