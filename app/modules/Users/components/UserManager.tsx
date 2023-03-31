import { Outlet } from '@remix-run/react'
import type { InternalUser } from '~/Types'
import { UsersList } from './UsersList'

interface UserManagerProps {
  users: InternalUser[]
}

export const UsersManager = ({ users }: UserManagerProps) => {
  return (
    <div>
      <h1>Users</h1>
      <a href="/users/new">Add</a>
      <Outlet />
      <UsersList users={users} />
    </div>
  )
}
