import type { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import type { InternalUser } from '~/Types'
import { UserForm } from '~/modules/Users/components/outlets/UserForm'

import { createUser } from '~/modules/Users/userService'

export async function action({ request }: ActionArgs) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as InternalUser

  await createUser(data)

  return redirect('/users')
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

export default function () {
  return <UserForm />
}
