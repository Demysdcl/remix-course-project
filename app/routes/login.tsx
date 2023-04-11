import type { ActionArgs } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { performMutation } from 'remix-forms'
import { z } from 'zod'
import { CustomForm } from '~/modules/shared'

const LoginInputSchema = z.object({
  email: z.string().email('Provide a valid email address').trim(),
  password: z.string().min(1),
})

type LoginInput = z.infer<typeof LoginInputSchema>

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

const mutation = makeDomainFunction(LoginInputSchema)(async (values) => values)

export const action = async ({ request }: ActionArgs) =>
  performMutation({ request, mutation, schema: LoginInputSchema })

export default () => (
  <div className="w-96 mx-auto mt-10 bg-[#f4f4f4] p-6 rounded-lg drop-shadow-lg border border-[rgba(0,0,0,0.05)]">
    <CustomForm values={values} schema={LoginInputSchema} fields={fields} />{' '}
  </div>
)
