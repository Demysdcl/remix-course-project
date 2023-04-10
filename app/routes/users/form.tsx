import { faker } from '@faker-js/faker'
import type { ActionArgs } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { z } from 'zod'
import { db } from '~/db.server'
import { formAction } from '~/form-action.server'
import { UserForm } from '~/modules/users/components/outlets/UserForm'

const schema = z.object({
  name: z.string().min(1, { message: 'Please provide your name' }).trim(),
  email: z
    .string()
    .min(1, { message: 'Please provide your e-mail' })
    .email({ message: 'Please provide a valid e-mail' })
    .trim(),
  city: z.string().min(1, { message: 'Please provide your city' }).trim(),
  state: z.string().min(1, { message: 'Please provide your state' }).trim(),
})

const mutation = makeDomainFunction(schema)(async (data) => {
  await db.user.create({ data: { ...data, avatar: faker.image.avatar() } })
})

export const action = async ({ request }: ActionArgs) =>
  formAction({ request, schema, mutation, successPath: '/users' })

export default function () {
  return <UserForm schema={schema} />
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
