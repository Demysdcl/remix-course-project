import type { SomeZodObject } from 'zod'
import { Form } from '~/form'

interface UserFormProps {
  schema: SomeZodObject
}

export function UserForm({ schema }: UserFormProps) {
  const fiels = [
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
            <Form schema={schema}>
              {({ Field, Errors, Button, register }) => (
                <>
                  {fiels.map(({ name, label }) => (
                    <Field key={name} name={name} label={label}>
                      {({ Label, Errors }) => (
                        <>
                          <Label className="block text-sm font-medium text-gray-700" />
                          <input
                            {...register(name)}
                            className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <Errors className="text-red-500 font-bold text-sm antialiased" />
                        </>
                      )}
                    </Field>
                  ))}

                  <Errors className="text-red-500 font-bold text-sm antialiased" />
                  <Button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Save
                  </Button>
                </>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
