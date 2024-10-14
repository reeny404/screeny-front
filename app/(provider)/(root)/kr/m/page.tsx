import Header from "@/components/landing/mobile/Header";
import Section1 from "@/components/landing/mobile/Section1";
import Section2 from "@/components/landing/mobile/Section2";
import Section3 from "@/components/landing/mobile/Section3";

function MobileLandingPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 space-y-10 px-3 pt-48 text-center md:pt-10 md:text-left">
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </>
  );
}

export default MobileLandingPage;
