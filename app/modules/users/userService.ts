import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import type { InternalUser } from '~/modules/shared/types'

const db = new PrismaClient()

export const getUsers = async (): Promise<InternalUser[]> => db.user.findMany()

export const createUser = async (user: InternalUser): Promise<InternalUser> =>
  db.user.create({ data: { ...user, avatar: faker.image.cats() } })
