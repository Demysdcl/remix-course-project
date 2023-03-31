import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

type Holiday = {
  name: string
  date: string
  type: string
}

export async function loader(params: LoaderArgs) {
  const holidays: Holiday[] = await fetch(
    'https://brasilapi.com.br/api/feriados/v1/2023',
  ).then((res) => res.json())
  return json(holidays)
}

export default function () {
  const holidays = useLoaderData<typeof loader>()
  return (
    <div>
      <h1>Feriados Nacionais ano 2023</h1>
      <ul>
        {holidays.map(({ name, date, type }) => (
          <li key={name}>
            {name} <strong>{date}</strong> <em>{type}</em>
          </li>
        ))}
      </ul>
    </div>
  )
}
