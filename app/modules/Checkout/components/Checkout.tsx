import { type Product } from '@prisma/client'
import { Form } from '~/remix-forms'
import type { CheckoutType, Totals } from '../service'
import { checkoutSchema } from '../service'

interface Props {
  products: Product[]
  totals: Totals
}

const values: CheckoutType = {
  email: 'vedovelli@gmail.com',
  address: '123 Main St',
  city: 'San Francisco',
  state: 'CA',
  postal: '94105',
}

export function Checkout({ products, totals }: Props) {
  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div
        className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 hidden h-full w-1/2 bg-indigo-900 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <h1 className="sr-only">Checkout</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-indigo-900 py-12 text-indigo-300 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-24"
        >
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <dl>
              <dt className="text-sm font-medium">Amount due</dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-white">
                ${totals.total}
              </dd>
            </dl>

            <ul
              role="list"
              className="divide-y divide-white divide-opacity-10 text-sm font-medium"
            >
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex items-start space-x-4 py-6"
                >
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-20 w-20 flex-none rounded-md object-cover object-center"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="text-white">{product.name}</h3>
                    <p>{product.color}</p>
                  </div>
                  <p className="flex-none text-base font-medium text-white">
                    {product.price}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="space-y-6 border-t border-white border-opacity-10 pt-6 text-sm font-medium">
              <div className="flex items-center justify-between">
                <dt>Subtotal</dt>
                <dd>${totals.subTotal}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Shipping</dt>
                <dd>FREE</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Taxes</dt>
                <dd>${totals.taxes}</dd>
              </div>

              <div className="flex items-center justify-between border-t border-white border-opacity-10 pt-6 text-white">
                <dt className="text-base">Total</dt>
                <dd className="text-base">${totals.total}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pt-0 lg:pb-24"
        >
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <Form
            schema={checkoutSchema}
            values={values}
            className="custom-form mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0"
          >
            {({ Field, Errors, Button }) => (
              <>
                <h3
                  id="contact-info-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Contact information
                </h3>
                <Field name="email" type="email" />
                <h3 className="text-lg font-medium text-gray-900">
                  Shipping address
                </h3>
                <div className="mt-6 grid grid-cols-1  gap-x-4 sm:grid-cols-3">
                  <Field name="address" className="sm:col-span-3" />
                  <Field name="city" />
                  <Field name="state" />
                  <Field name="postal" />
                </div>
                <Errors />
                <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                  <Button>Pay Now</Button>
                </div>
              </>
            )}
          </Form>
        </section>
      </div>
    </div>
  )
}
