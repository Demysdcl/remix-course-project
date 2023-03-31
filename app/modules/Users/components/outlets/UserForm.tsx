import { Form } from '@remix-run/react'

export const UserForm = () => (
  <Form method="post">
    <div>
      <label htmlFor="name">
        Nome:
        <input name="name" type="text" />
      </label>
    </div>
    <div>
      <label htmlFor="email">
        E-mail:
        <input name="email" type="email" />
      </label>
    </div>
    <button type="submit">Salvar</button>
  </Form>
)
