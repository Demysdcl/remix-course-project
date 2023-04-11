import { CustomForm } from '~/modules/shared'
import type { UserInput } from '../service'
import { userSchema } from '../service'

type FieldInput = {
  name: keyof UserInput
  label: string
}

export function UserForm() {
  const fields: FieldInput[] = [
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'email',
      label: 'E-mail',
    },
    {
      name: 'city',
      label: 'City',
    },
    {
      name: 'state',
      label: 'State',
    },
  ]

  return (
    <div>
      <div className="pt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <CustomForm
              schema={userSchema}
              fields={fields}
              buttonClass="self-end"
              buttonText="Save"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
