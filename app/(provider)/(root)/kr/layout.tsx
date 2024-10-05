import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen min-w-full bg-navy text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
