import type { Path, UseFormRegister } from 'react-hook-form'
import type { RenderFieldProps } from 'remix-forms'
import type { SomeZodObject, TypeOf } from 'zod'

interface RxInputProps<T extends SomeZodObject> {
  Field: RenderFieldProps<T>['Field']
  name: keyof TypeOf<T>
  label: string
  register: UseFormRegister<any>
}

export const RxInput = <T extends SomeZodObject>({
  Field,
  name,
  label,
  register,
}: RxInputProps<T>) => (
  <Field key={name.toString()} name={name} label={label}>
    {({ Label, Errors }) => (
      <>
        <Label className="block text-sm font-medium text-gray-700" />
        <input
          {...register(name as Path<T>)}
          className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <Errors className="text-red-500 font-bold text-sm antialiased" />
      </>
    )}
  </Field>
)
