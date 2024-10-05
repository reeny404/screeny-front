import Image from "next/image";

function Section2() {
  return (
    <section className="py-16">
      <div className="grid grid-flow-col grid-cols-2 rounded-[2em] bg-darknavy">
        <div className="space-y-2 py-24 pl-28">
          <span className="text-sm font-semibold text-green-400">SCREENY</span>
          <h2 className="pb-5 text-3xl font-semibold leading-normal tracking-tighter">
            디자인 레퍼런스를
            <br /> 찾는 시간을 단축시키기 위해,
            <br /> 내가 찾는 화면을 정확하게
            <br /> 한곳에 모아서 보여주기 위해.
          </h2>
          <span className="text-gray-400">
            이제는 한 곳에서 편리하고 빠르게 레퍼런스를 찾아보세요!
          </span>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/landing/vault.png"
            alt="search-card-example"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative top-10 mx-auto grid w-4/5 gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-gray-700 p-6">
          <h3 className="mb-4 text-xl font-semibold">Feature 1</h3>
          <p>원하는 디자인 UI를 빠르고 정확하게 찾기</p>
        </div>
        <div className="rounded-lg bg-gray-700 p-6">
          <h3 className="mb-4 text-xl font-semibold">Feature 2</h3>
          <p>AI를 활용한 디자인 추천 시스템</p>
        </div>
        <div className="rounded-lg bg-gray-700 p-6">
          <h3 className="mb-4 text-xl font-semibold">Feature 3</h3>
          <p>다양한 디자인 트렌드 분석 및 제공</p>
        </div>
      </div>
      <div>
        <p>“</p>
        <p>
          모든 앱을 다운 받지 않아도
          <br />
          화면들을 여기서 확인할 수
          <br />
          있다면 너무 편리할 것 같아요.
        </p>
        <div>
          <div>
            <div>
              <div>
                <span className="text-blue-400">@</span>
                <span>H 디자이너</span>
              </div>
              <span>Product Designer</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
