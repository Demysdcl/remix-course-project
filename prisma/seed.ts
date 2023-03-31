import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  await prisma.user.deleteMany()

  Array.from(Array(10).keys()).forEach(async () => {
    await prisma.user.create({
      data: {
        name: `${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        city: faker.address.city(),
        state: faker.address.state(),
      },
    })
  })
}

seed().finally(() => prisma.$disconnect())
