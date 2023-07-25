"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="link text-primary-content transition-all"
      onClick={() => signOut({callbackUrl: '/'})}
    >
      Sign out
    </button>
  );
}
