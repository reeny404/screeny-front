import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-screen-max">
      <Header>
        <Image src="/icons/menu.svg" alt="menu" width={32} height={32} />
      </Header>
      {children}
      <Footer className="mt-32" />
    </div>
  );
}

export default RootLayout;
