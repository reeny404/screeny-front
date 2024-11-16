import type { Metadata } from "next";
import localFont from "next/font/local";
import clsx from "clsx";
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Screeny",
  description: "디자인 레퍼런스? 이제 시간 쓰지 마세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={clsx(
          pretendard.variable,
          "min-h-screen min-w-full bg-navy text-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}
