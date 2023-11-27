"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CredentialsFormProps {
  csrfToken?: string;
}

export function CredentialsForm(props: CredentialsFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInResponse = await signIn("credentials", {
      username: data.get("username"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      //Redirect to homepage
      router.push("/home");
    } else {
      console.log("Error: ", signInResponse);
      setError("Your Username or Password is wrong!");
    }
  };

  return (
    <form
      className="w-full mt-8 text-xl text-black font-semibold flex flex-col gap-5 "
      onSubmit={handleSubmit}
    >
      {error && (
        <span className="p-4 mb-2 text-lg font-semibold text-white bg-blue-500 rounded-md">
          {error}
        </span>
      )}
      <input
        type="text"
        name="username"
        placeholder="Enter your username..."
        required
        className="p-4"
      />

      <input
        type="password"
        name="password"
        className="p-4"
        placeholder="Password"
        required
      />

      <button type="submit" className="p-4 bg-blue-300 hover:bg-blue-400">
        Log in
      </button>
    </form>
  );
}
