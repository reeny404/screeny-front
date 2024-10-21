import Header from "@/components/landing/mobile/Header";
import Section1 from "@/components/landing/mobile/Section1";
import Section2 from "@/components/landing/mobile/Section2";
import Section3 from "@/components/landing/mobile/Section3";

function MobileLandingPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 sm:space-y-10 md:space-y-32 pt-48 text-center sm:px-3 md:px-12 md:pt-10 md:text-left">
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </>
  );
}

export default MobileLandingPage;
