import Header from "@/components/landing/Header";
import Section1 from "@/components/landing/Section1";
import Section2 from "@/components/landing/Section2";
import Section3 from "@/components/landing/Section3";

function MobileLandingPage() {
  return (
    <>
      <Header />
      <main className="xs:space-y-10 relative z-10 pt-44 text-center sm:px-3 md:space-y-32 md:px-12 md:pt-10 md:text-left">
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </>
  );
}

export default MobileLandingPage;
