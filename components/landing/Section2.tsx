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
    <section className="py-16">
      <div className="rounded-3xl bg-dark-navy-100 pb-32">
        <article className="mx-auto grid w-5/6 grid-flow-col grid-cols-2 py-20">
          <div className="space-y-2 py-16">
            <span className="font-semibold text-green-400 md:text-sm">
              SCREENY
            </span>
            <h2 className="pb-5 font-semibold leading-normal tracking-tighter md:text-2xl lg:text-[36px]">
              디자인 레퍼런스를
              <br /> 찾는 시간을 단축시키기 위해,
              <br /> 내가 찾는 화면을 정확하게
              <br /> 한곳에 모아서 보여주기 위해.
            </h2>
            <span className="lg:text-base-l text-gray-400">
              이제는 한 곳에서 편리하고 빠르게 레퍼런스를 찾아보세요!
            </span>
          </div>
          <div className="relative ml-auto flex h-full w-5/6">
            <Image
              src="/landing/vault.png"
              alt="search-card-example"
              fill
              className="object-contain"
            />
          </div>
        </article>
      </div>
      <div className="relative -top-44 mx-auto mt-6 grid w-5/6 gap-8 md:h-40 md:w-11/12 md:grid-cols-3 md:gap-4">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="mx-auto max-w-[352px] rounded-3xl bg-dark-navy-200 px-10 py-10"
          >
            <span className="text-3xl">“</span>
            <p className="whitespace-pre-wrap break-all py-10 lg:text-[22px]">
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
    </section>
  );
}

export default Section2;
