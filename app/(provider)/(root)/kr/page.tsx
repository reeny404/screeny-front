import Section1 from "@/app/(provider)/(root)/kr/_section/Section1";
import Section2 from "@/app/(provider)/(root)/kr/_section/Section2";
import Section3 from "@/app/(provider)/(root)/kr/_section/Section3";

function LandingPage() {
  return (
    <main className="relative z-10 pt-44 text-center xs:space-y-10 sm:px-3 md:space-y-32 md:px-12 md:pt-10 md:text-left">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}

export default LandingPage;
