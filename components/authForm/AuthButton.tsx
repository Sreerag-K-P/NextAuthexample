"use client";

import { signIn } from "next-auth/react";

export function GithubSignInButton() {
  const handleClick = () => {
    signIn("github");
  };

  return (
    <button onClick={handleClick}>
      <span className="ml-4 bg-gray-200 p-2 hover:bg-slate-600">
        Continue with Github
      </span>
    </button>
  );
}
export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <button onClick={handleClick}>
      <span className="ml-4 bg-gray-200 p-2 hover:bg-slate-600">
        Continue with Google
      </span>
    </button>
  );
}

export function CredentialsSignInButton() {
  const handleClick = () => {
    signIn();
  };

  return (
    <button onClick={handleClick}>
      <span className="ml-4">Continue with Email</span>
    </button>
  );
}
