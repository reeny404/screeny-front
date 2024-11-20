import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginCallbackPageProps = {
  searchParams: { [key: string]: string | undefined };
};

async function LoginCallbackPage({ searchParams }: LoginCallbackPageProps) {
  const token = searchParams.token;
  if (!token) {
    redirect("/login");
  }

  const cookie = cookies();
  cookie.set("Authorization", token);

  redirect("/");
}

export default LoginCallbackPage;
