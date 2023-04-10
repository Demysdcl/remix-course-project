import { faker } from '@faker-js/faker'
import { db } from '~/db.server'
import type { InternalUser } from '~/modules/users/types'

export const getUsers = async (): Promise<InternalUser[]> => db.user.findMany()

export const createUser = async (
  user: Omit<InternalUser, 'id' | 'avatar'>,
): Promise<InternalUser> =>
  db.user.create({ data: { ...user, avatar: faker.image.cats() } })
