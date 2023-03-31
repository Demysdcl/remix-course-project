import { Form } from '@remix-run/react'
import { RxButton } from '~/modules/shared/components/RxButton'
import { RxInput } from '~/modules/shared/components/RxInput'

export function UserForm() {
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
            <Form method="post">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <RxInput
                      id="name"
                      label="Full name"
                      className="col-span-6"
                    />
                    <RxInput
                      id="email"
                      label="Email address"
                      className="col-span-6"
                    />
                    <RxInput id="city" label="City" className="col-span-6" />
                    <RxInput id="state" label="State" className="col-span-6" />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <RxButton>Save</RxButton>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
