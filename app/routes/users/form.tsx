import type { ActionArgs } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { ErrorFeedback } from '~/modules/shared'
import { UserForm, createUser, userSchema } from '~/modules/users'
import { formAction } from '~/remix-forms'

const mutation = makeDomainFunction(userSchema)(async (data) => {
  await createUser(data)
})

export const action = async ({ request }: ActionArgs) =>
  formAction({ request, schema: userSchema, mutation, successPath: '/users' })

export function ErrorBoundary({ error }: { error: Error }) {
  return <ErrorFeedback />
}

export default () => <UserForm />
