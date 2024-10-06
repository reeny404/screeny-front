import Section1 from "@/components/landing/Section1";
import Section2 from "@/components/landing/Section2";
import Section3 from "@/components/landing/Section3";

export default function DesktopLandingPage() {
  return (
    <main className="space-y-32 px-12 py-12">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
