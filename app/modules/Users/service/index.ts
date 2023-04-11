import { faker } from '@faker-js/faker'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { db } from '~/db'
import type { InternalUser } from '../types'

export const userSchema = z.object({
  name: z.string().min(1, { message: 'Please provide your name' }).trim(),
  email: z.string().email({ message: 'Please provide a valid e-mail' }).trim(),
  city: z.string().min(1, { message: 'Please provide your city' }).trim(),
  state: z.string().min(1, { message: 'Please provide your state' }).trim(),
})

export type UserInput = z.infer<typeof userSchema>

export const getUsers = async (): Promise<InternalUser[]> => db.user.findMany()

export const createUser = async (user: UserInput): Promise<InternalUser> =>
  db.user.create({
    data: {
      ...user,
      avatar: faker.image.cats(),
      password: await bcrypt.hash('123456', 10),
    },
  })
