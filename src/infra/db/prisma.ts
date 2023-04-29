import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function init() {
  try {
    await prisma.$connect()
  } catch (err) {
    console.log(err)
    prisma.$disconnect()
  }
}

init()

export { prisma }
