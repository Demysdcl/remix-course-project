import type { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { performMutation } from 'remix-forms'
import type { LoginInput } from '~/modules/Auth'
import { LoginInputSchema, login } from '~/modules/Auth'
import { CustomForm } from '~/modules/Shared'
import { commitSession, getSession } from '~/session.server'

const values: LoginInput = {
  email: 'Zola95@yahoo.com',
  password: '123456',
}

const fields = [
  {
    label: 'E-mail',
    name: 'email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
  },
]

const mutation = makeDomainFunction(LoginInputSchema)(async (values) => {
  return login(values)
})

export async function action({ request }: ActionArgs) {
  const result = await performMutation({
    request,
    schema: LoginInputSchema,
    mutation,
  })

  if (!result.success) {
    return result
  }

  const session = await getSession(request.headers.get('Cookie'))
  session.set('user', result.data)

  return redirect('/', {
    headers: { 'Set-Cookie': await commitSession(session) },
  })
}

export default () => (
  <div className="w-96 mx-auto mt-10 bg-[#f4f4f4] p-6 rounded-lg drop-shadow-lg border border-[rgba(0,0,0,0.05)]">
    <CustomForm values={values} schema={LoginInputSchema} fields={fields} />{' '}
  </div>
)
