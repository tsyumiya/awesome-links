import { useUser } from "@auth0/nextjs-auth0/client"
import Link from "next/link"
export default function CreateLinkButton() {
  const { user } = useUser()
  return (
    <>
      {user && (
        <div className="flex items-center justify-center mr-5 capitalize bg-blue-500 py-1 px-3 rounded-md text-white">
          <Link href="/admin">+ Create</Link>
        </div>
      )}
    </>
  )
}
