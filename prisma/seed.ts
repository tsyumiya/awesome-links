import { PrismaClient } from "@prisma/client"
import { links } from "../src/app/data/links"

const prisma = new PrismaClient({ log: ["query"] })

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      role: "ADMIN"
    }
  })

  await createLinks()
}

async function createLinks() {
  for (const link of links) {
    await prisma.link.create({
      data: link
    })
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })

  .finally(async () => {
    await prisma.$disconnect()
  })
