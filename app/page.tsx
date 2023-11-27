import {
  GithubSignInButton,
  GoogleSignInButton,
} from "@/components/authForm/AuthButton";
import { CredentialsForm } from "@/components/authForm/CredentialsForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(options);
  if (session) redirect("/home");
  return (
    <main>
      <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center gap-9 p-10 ">
          <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
          <GoogleSignInButton />
          <GithubSignInButton />
          <span className="text-2xl font-semibold text-blue-800 text-center mt-8">
            Or
          </span>
          {/* <CredentialsSignInButton /> */}
          <span className="opacity-50">
            For test:username: sreerag, password: sreerag1234
          </span>

          <CredentialsForm />
        </div>
      </div>
    </main>
  );
}
