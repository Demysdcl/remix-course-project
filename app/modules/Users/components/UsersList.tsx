import type { InternalUser } from '~/Types'

interface UsersListProps {
  users: InternalUser[]
}

export const UsersList = ({ users }: UsersListProps) => (
  <ul>
    {users.map(({ name, id, avatar }) => (
      <li key={id}>
        <p>{name}</p>
        <img src={avatar} alt={name} height="200" />
      </li>
    ))}
  </ul>
)
