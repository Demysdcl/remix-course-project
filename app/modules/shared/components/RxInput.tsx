import type { HTMLInputTypeAttribute } from 'react'

interface RxInputProps {
  label: string
  id: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  className?: string
}

export const RxInput = ({
  label,
  id,
  placeholder,
  type = 'text',
  className,
}: RxInputProps) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      name={id}
      id={id}
      autoComplete={id}
      placeholder={placeholder}
      className="h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
)
