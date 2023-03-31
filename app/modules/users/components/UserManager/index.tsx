import { Link, Outlet } from '@remix-run/react'
import type { InternalUser } from '~/modules/shared/types'
import { UsersTable } from './UsersTable'

interface UserManagerProps {
  users: InternalUser[]
}

export const UsersManager = ({ users }: UserManagerProps) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            to="/users/form"
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add user
          </Link>
        </div>
      </div>

      <Outlet />
      <UsersTable users={users} />
    </div>
  )
}
