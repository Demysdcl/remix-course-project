import type { ActionArgs } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { z } from 'zod'
import { formAction } from '~/form-action.server'
import { UserForm } from '~/modules/users/components/outlets/UserForm'

const schema = z.object({
  name: z.string().min(1).trim(),
  email: z.string().min(1).email().trim(),
  city: z.string().min(1).trim(),
  state: z.string().min(1).trim(),
})

const mutation = makeDomainFunction(schema)(async (values) =>
  console.log(values),
)
export const action = async ({ request }: ActionArgs) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: '/users',
  })

export default function () {
  return <UserForm />
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  )
}
