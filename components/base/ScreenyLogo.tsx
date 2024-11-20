import Link from "next/link";
import React from "react";

function ScreenyLogo() {
  return (
    <Link href="/" className="relative -top-3 text-4xl font-semibold">
      Screeny
      <span className="text-carrot">.</span>
    </Link>
  );
}

export default ScreenyLogo;
