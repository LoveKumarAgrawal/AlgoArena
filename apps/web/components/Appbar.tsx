"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { CodeIcon } from "./Icon";

export function Appbar() {
  const { data: session, status: sessionStatus } = useSession();
  const isLoading = sessionStatus === "loading";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 px-4 md:px-6 py-0 flex items-center justify-between h-14">
      <Link href="/" className="flex items-center gap-2 text-gray-900 hover:text-indigo-600 transition-colors" prefetch={false}>
        <div className="flex items-center justify-center w-7 h-7 rounded-md bg-gray-900 text-white">
          <CodeIcon className="h-4 w-4" />
        </div>
        <span className="text-base font-bold tracking-tight">AlgoArena</span>
      </Link>

      <nav className="hidden md:flex items-center gap-0.5">
        {[
          { href: "/contests", label: "Contests" },
          { href: "/problems", label: "Problems" },
          { href: "/standings", label: "Standings" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-1.5 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            prefetch={false}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        {!isLoading && session?.user && (
          <>
            <span className="hidden md:block text-sm text-gray-500 font-medium">
              {session.user.name ?? session.user.email}
            </span>
            <button
              onClick={() => signOut()}
              className="rounded-lg border border-gray-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              Logout
            </button>
          </>
        )}

        {!isLoading && !session?.user && (
          <button
            onClick={() => signIn()}
            className="rounded-lg bg-gray-900 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition-colors"
          >
            Sign in
          </button>
        )}

        {isLoading && (
          <div className="w-16 h-7 rounded-lg bg-gray-100 animate-pulse" />
        )}
      </div>
    </header>
  );
}
