import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma"

export async function POST(request: NextRequest) {
  const { email, secret } = await request.json()

  if (secret !== process.env.AUTH0_HOOK_SECRET) {
    return NextResponse.json(
      {
        message: `You must provide the secret 🤫`
      },
      {
        status: 403
      }
    )
  }

  if (email) {
    await prisma.user.create({
      data: { email }
    })

    return NextResponse.json(
      {
        message: `User with email: ${email} has been created successfully!`
      },
      {
        status: 200
      }
    )
  }
}
