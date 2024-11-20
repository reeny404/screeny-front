import ScreenyLogo from "@/components/base/ScreenyLogo";
import { API_SERVER } from "@/constants/env";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <main className="grid h-screen md:grid-cols-[2fr_3fr]">
      <section className="flex flex-col items-center justify-center space-y-5 text-center">
        <ScreenyLogo />
        <div className="flex flex-col text-2xl font-semibold">
          <span>로그인하고</span>
          <span>더 많은 컨텐츠를 찾아보세요!</span>
        </div>
        <Link
          href={API_SERVER + "/oauth2/authorization/google"}
          className="flex w-2/3 max-w-[333px] justify-center rounded-full bg-white py-4 font-semibold text-black"
        >
          <Image
            src="/logo/google.svg"
            alt="google-logo"
            width={24}
            height={23}
          />
          <span className="w-3/4">구글로 계속하기</span>
        </Link>
        <div className="flex flex-col text-sm text-neutrals-7">
          <span>
            시작하면 아래{" "}
            <Link href="/docs/terms" className="underline">
              서비스 이용약관
            </Link>
            에 동의하게 됩니다.
          </span>
          <span>
            개인정보 처리에 대해서는{" "}
            <Link href="/docs/terms/privacy" className="underline">
              개인정보 처리방침
            </Link>
            을 확인해 주세요.
          </span>
        </div>
      </section>
      <section className="relative hidden overflow-hidden md:block">
        <Image
          src="/bg-login.png"
          alt="mobile-captures"
          fill
          className="object-cover"
        />
      </section>
    </main>
  );
}

export default LoginPage;
