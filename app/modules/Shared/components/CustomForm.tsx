import type { HTMLInputTypeAttribute } from 'react'
import type { SomeZodObject } from 'zod'
import { Form } from '~/remix-forms'

interface CustomFormProps {
  schema: SomeZodObject
  fields: { label: string; name: string; type?: HTMLInputTypeAttribute }[]
  buttonClass?: string
  buttonText?: string
  values?: any
}

export const CustomForm = ({
  schema,
  fields,
  buttonClass,
  buttonText = 'OK',
  values,
}: CustomFormProps) => (
  <Form values={values} className="flex flex-col" schema={schema}>
    {({ Field, Errors, Button, register }) => (
      <>
        {fields.map((field) => (
          <Field className="mb-4" key={field.name} {...field}>
            {({ Label, Errors }) => (
              <>
                <Label className="block text-sm font-medium text-gray-700" />
                <input
                  {...register(field.name)}
                  className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <Errors className="text-red-500 font-bold text-sm antialiased" />
              </>
            )}
          </Field>
        ))}

        <Errors className="text-red-500 font-bold text-sm antialiased" />
        <Button
          className={`mt-8 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${buttonClass}`}
        >
          {buttonText}
        </Button>
      </>
    )}
  </Form>
)
