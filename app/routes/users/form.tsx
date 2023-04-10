import { faker } from '@faker-js/faker'
import type { User } from '@prisma/client'
import type { ActionArgs } from '@remix-run/node'
import { redirect } from 'react-router'
import { z } from 'zod'
import { db } from '~/db.server'
import { UserForm } from '~/modules/users/components/outlets/UserForm'

const schema = z.object({
  name: z.string().min(1).trim(),
  email: z.string().min(1).email().trim(),
  city: z.string().min(1).trim(),
  state: z.string().min(1).trim(),
})

export const action = async ({ request }: ActionArgs) => {
  const data = Object.fromEntries(await request.formData())
  const user = data as unknown as User
  await db.user.create({ data: { ...user, avatar: faker.image.avatar() } })

  return redirect('/users')
}

export default function () {
  return <UserForm />
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="bg-red-100 border border-red-500 p-12">
      <span className="text-red-500 font-bold text-2xl">
        Alguma coisa errada não está certa 🤔
      </span>
    </div>
  )
}
