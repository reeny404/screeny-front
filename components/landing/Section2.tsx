import Image from "next/image";

const reviews = [
  {
    name: "H 디자이너",
    job: "Product Designer",
    profile: "/landing/avatar1.png",
    text: `모든 앱을 다운 받지 않아도\n화면들을 여기서 확인할 수\n있다면 너무 편리할 것 같아요.`,
  },
  {
    name: "K 디자이너",
    job: "UI Designer",
    profile: "/landing/avatar2.png",
    text: `여러 앱 화면들을 컴포넌트별\n로 다 볼 수 있다면 디자인에\n도움이 많이 될 것 같아요!`,
  },
  {
    name: "P 개발자",
    job: "Front End Developer",
    profile: "/landing/avatar3.png",
    text: `제가 찾는 화면들을 한곳에\n모아볼 수 있다면 너무 편리\n할 것 같아요!`,
  },
];

function Section2() {
  return (
    <section className="py-16">
      <div className="bg-dark-navy-100 grid grid-flow-col grid-cols-2 rounded-[2em] pb-32">
        <div className="space-y-2 py-32 pl-28">
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
      <div className="relative -top-44 mx-auto mt-6 grid h-40 w-5/6 gap-8 md:grid-cols-3">
        {reviews.map((review, i) => (
          <div key={i} className="bg-dark-navy-200 rounded-3xl px-10 py-10">
            <span className="text-3xl">“</span>
            <p className="whitespace-pre-wrap py-10">{review.text}</p>
            <div className="grid grid-cols-2">
              <div className="leading-tight">
                <div className="text-xs">
                  <span className="pr-1 text-blue-400">@</span>
                  <span>{review.name}</span>
                </div>
                <span className="text-xs text-gray-400">{review.job}</span>
              </div>
              <div className="flex justify-between">
                <div className="relative -top-1 left-[100px]">
                  <div className="flex h-3 w-3 justify-center rounded-full bg-green-400">
                    <Image
                      src="/icons/check.svg"
                      alt="check"
                      width={6}
                      height={4}
                    />
                  </div>
                </div>
                <div>
                  <Image
                    src={review.profile}
                    alt="avatar1"
                    width={42}
                    height={42}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section2;