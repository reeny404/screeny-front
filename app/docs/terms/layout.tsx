import ScreenyLogo from "@/components/base/ScreenyLogo";
import React, { PropsWithChildren } from "react";

function TermLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center space-y-9 py-12">
      <ScreenyLogo />
      {children}
    </div>
  );
}

export default TermLayout;
