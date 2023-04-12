import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { db } from '~/db'

export const LoginInputSchema = z.object({
  email: z.string().email('Provide a valid email address').trim(),
  password: z.string().min(1),
})

export type LoginInput = z.infer<typeof LoginInputSchema>

export const login = async (values: LoginInput) => {
  const user = await db.user.findUnique({
    where: {
      email: values.email,
    },
  })

  if (!user) {
    throw 'User not found'
  }

  const isValidPassword = await bcrypt.compare(values.password, user.password)

  if (!isValidPassword) {
    throw 'Invalid password'
  }

  return user
}
