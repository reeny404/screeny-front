import AbsoulteImg from "@/components/landing/AbsoulteImg";
import Footer from "@/components/base/Footer";
import { PropsWithChildren } from "react";
import NoticeButtons from "@/components/landing/NoticeButtons";
import Header from "@/components/landing/Header";

function LandingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AbsoulteImg
        src="/landing/gradient 1.svg"
        className="left-56 top-0"
        width={200}
        height={200}
      />
      <AbsoulteImg src="/landing/gradient 2.svg" width={400} height={400} />
      <AbsoulteImg
        src="/landing/gradient 3.svg"
        className="right-0 top-[350px]"
        width={743}
        height={743}
      />
      <AbsoulteImg
        src="/landing/gradient 4.svg"
        className="top-[800px]"
        width={400}
        height={400}
      />
      <div className="mx-auto max-w-[1440px]">
        <Header>
          <NoticeButtons />
        </Header>
        {children}
      </div>
      <Footer hasLogo={true}>
        <div className="pt-6">
          <NoticeButtons />
        </div>
      </Footer>
    </>
  );
}

export default LandingLayout;
