import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { UsersManager } from '~/modules/Users/components/UserManager'
import { getUsers } from '~/modules/Users/userService'

export async function loader() {
  return json({
    users: await getUsers(),
  })
}

export default function () {
  const { users } = useLoaderData<typeof loader>()

  return <UsersManager users={users} />
}
