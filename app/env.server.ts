import { z } from 'zod'

const schema = z.object({
  DATABASE_URL: z.string().min(1),
  SESSION_SECRET: z.string().min(1),
  TIMEOUT: z.coerce.number().positive(),
})

type ENV = z.infer<typeof schema>

declare global {
  var ENV: ENV
  interface Window {
    ENV: ENV
  }
}

export const getEnv = () =>
  schema.parse({
    DATABASE_URL: process.env.DATABASE_URL,
    TIMEOUT: process.env.TIMEOUT,
    SESSION_SECRET: process.env.SESSION_SECRET,
  })
