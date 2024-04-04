"use client"

import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client"
import CreateLinkButton from "./create-link-button"

export default function LoginLogout() {
  const { user } = useUser()
  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <CreateLinkButton />
      {user ? (
        <div className="flex items-center space-x-5">
          <Link
            href="/api/auth/logout"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Logout
          </Link>

          <img alt="profile" className="rounded-full w-12 h-12" src={user.picture ? user.picture : ""} />
        </div>
      ) : (
        <Link
          href="/api/auth/login"
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
        </Link>
      )}
    </nav>
  )
}
