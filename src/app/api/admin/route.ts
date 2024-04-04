import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
import { getSession } from "@auth0/nextjs-auth0"
import AuthOptions from "@auth0/nextjs-auth0"
import { redirect } from "next/navigation"

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await getSession()
  try {
    if (!session) {
      console.log("Not authorized!")
      throw new Error("Not authorized!")
    }

    return NextResponse.json({ session }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  } finally {
    if (!session) {
      redirect("/")
    } else {
      redirect("/admin")
    }
  }
}
