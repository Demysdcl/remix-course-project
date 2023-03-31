import type { LoaderArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export async function loader(props: LoaderArgs) {
  return redirect('/users')
}
