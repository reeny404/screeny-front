import Section1 from "@/components/landing/desktop/Section1";
import Section2 from "@/components/landing/desktop/Section2";
import Section3 from "@/components/landing/desktop/Section3";
import Header from "@/components/landing/desktop/Header";

export default function DesktopLandingPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 space-y-32 px-12 pt-10">
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </>
  );
}
