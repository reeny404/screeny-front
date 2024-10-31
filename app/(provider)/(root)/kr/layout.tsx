import AbsoulteImg from "@/components/landing/AbsoulteImg";
import Footer from "@/components/Footer";
import { PropsWithChildren } from "react";
import NoticeButtons from "@/components/NoticeButtons";
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
      <Header>
        <NoticeButtons />
      </Header>
      {children}
      <Footer hasLogo={true}>
        <NoticeButtons />
      </Footer>
    </>
  );
}

export default LandingLayout;
