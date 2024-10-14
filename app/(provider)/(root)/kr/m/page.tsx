import Section1 from "@/components/landing/mobile/Section1";
import Section2 from "@/components/landing/mobile/Section2";
import Section3 from "@/components/landing/mobile/Section3";

function MobileLandingPage() {
  return (
    <main className="relative z-10 space-y-8 px-3 pt-10 text-center md:text-left">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}

export default MobileLandingPage;
