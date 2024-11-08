import Image from "next/image";

const reviews = [
  {
    name: "H 디자이너",
    job: "Product Designer",
    profile: "/landing/avatar1.png",
    text: `모든 앱을 다운 받지 않아도 화면들을 여기서 확인할 수 있다면 너무 편리할 것 같아요.`,
  },
  {
    name: "K 디자이너",
    job: "UI Designer",
    profile: "/landing/avatar2.png",
    text: `여러 앱 화면들을 컴포넌트별로 다 볼 수 있다면 디자인에 도움이 많이 될 것 같아요!`,
  },
  {
    name: "P 개발자",
    job: "Front End Developer",
    profile: "/landing/avatar3.png",
    text: `제가 찾는 화면들을 한곳에 모아볼 수 있다면 너무 편리할 것 같아요!`,
  },
];

function Section2() {
  return (
    <section className="xs:px-5 md:px-0 md:py-16">
      <div className="bg-nenutral-3 rounded-3xl px-4 py-8 md:px-0 md:pb-32 md:pt-0">
        <article className="grid space-y-4 md:mx-auto md:grid md:w-5/6 md:grid-flow-col md:grid-cols-[1fr_220px] md:space-y-0 md:py-20 lg:grid-cols-2">
          <div className="space-y-3 pb-8 md:space-y-2 md:py-16">
            <p className="text-base font-bold text-green-400 md:text-sm md:font-semibold">
              SCREENY
            </p>
            <h2 className="text-2xl font-bold leading-normal tracking-tighter md:pb-5 md:text-3xl md:font-semibold lg:text-[36px]">
              디자인 레퍼런스를
              <br /> 찾는 시간을 단축시키기 위해,
              <br /> 내가 찾는 화면을 정확하게
              <br /> 한곳에 모아서 보여주기 위해.
            </h2>
            <p className="pt-2 text-base-s text-gray-400 md:hidden">
              이제는 한 곳에서 편리하고 빠르게
              <br /> 레퍼런스를 찾아보세요!
            </p>
            <p className="hidden text-base-l text-gray-400 md:block">
              이제는 한 곳에서 편리하고 빠르게 레퍼런스를 찾아보세요!
            </p>
          </div>
          <div className="relative min-h-60 w-full md:ml-auto md:w-11/12">
            <Image
              src="/landing/vault.png"
              alt="search-card-example"
              fill
              className="object-contain"
            />
          </div>
        </article>
        <div className="relative mx-auto mt-6 grid w-11/12 gap-5 text-left md:h-16 md:grid-cols-3 md:gap-4">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-darkNavy mx-auto max-w-[352px] rounded-3xl px-6 py-8 md:px-10 md:py-10"
            >
              <div className="text-2xl md:text-3xl">“</div>
              <p className="whitespace-pre-wrap break-all py-10 sm:text-base-l md:text-base lg:text-[22px]">
                {review.text}
              </p>
              <div className="grid grid-cols-[1fr_50px]">
                <div className="leading-tight">
                  <div className="text-base-s md:text-sm">
                    <span className="pr-1 text-blue-400">@</span>
                    <span>{review.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{review.job}</span>
                </div>
                <Image
                  src={review.profile}
                  alt="avatar"
                  width={42}
                  height={42}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden h-48 md:block" />
    </section>
  );
}

export default Section2;
