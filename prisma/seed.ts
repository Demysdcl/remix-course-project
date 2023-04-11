import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  await prisma.user.deleteMany()

  const ELEMENTS_QTY = 12

  Array.from(Array(ELEMENTS_QTY).keys()).forEach(async () => {
    await prisma.user.create({
      data: {
        name: `${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        password: await bcrypt.hash('123456', 10),
        avatar: faker.image.avatar(),
        city: faker.address.city(),
        state: faker.address.state(),
      },
    })
  })
}

seed().finally(() => prisma.$disconnect())
