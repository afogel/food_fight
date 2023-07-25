import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import SignOut from "./sign-out";

export default async function NavBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <nav className="bg-base-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link href="/" className="btn-link btn text-primary-content">
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="btn-link btn text-primary-content"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="btn-link btn text-primary-content"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
          {session && session.user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn m-1">
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full"
                  width={32}
                  height={32}
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
              >
                <li>
                  <Link href="/"></Link>
                </li>
                <li>
                  <SignOut />
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/login" className="btn">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
