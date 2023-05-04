import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function users() {
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

async function products() {
  await prisma.product.deleteMany()

  const quantity = 12

  Array.from(Array(quantity).keys()).forEach(async () => {
    await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        color: `${faker.color.human()} and ${faker.color.human()}`,
        href: faker.internet.url(),
        imageSrc: faker.image.cats(),
        imageAlt: faker.lorem.sentence(),
        price: faker.datatype.number({ min: 1000, max: 100000 }),
      },
    })
  })
}

async function seed() {
  await users()
  await products()
}

seed().finally(() => prisma.$disconnect())
