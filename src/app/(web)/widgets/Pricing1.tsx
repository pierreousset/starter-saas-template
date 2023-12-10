import { CheckIcon } from '@heroicons/react/20/solid';

const includedFeatures = [
  'NextJS boilerplate',
  'Stripe payments',
  'Supabase',
  'Google Oauth - Next-auth',
];

const Pricing1 = () => (
  <div id='pricing' className='py-24 sm:py-32'>
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl sm:text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
          Simple no-tricks pricing
        </h2>
        {/* You can add more text :
        <p className='mt-6 text-lg leading-8 text-primary'>
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p> */}
      </div>
      <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
        <div className='p-8 sm:p-10 lg:flex-auto'>
          <h3 className='text-2xl font-bold tracking-tight text-black'>
            Lifetime membership
          </h3>
          <p className='mt-6 text-base leading-7 text-black'>
            Save time on your real product. This boilerplate will save you time
            in making the best possible product.
          </p>
          <div className='mt-10 flex items-center gap-x-4'>
            <h4 className='flex-none text-sm font-semibold leading-6 text-primary'>
              What’s included
            </h4>
            <div className='h-px flex-auto bg-gray-100' />
          </div>
          <ul className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6'>
            {includedFeatures.map(feature => (
              <li key={feature} className='flex gap-x-3 text-black'>
                <CheckIcon
                  className='h-6 w-5 flex-none text-primary'
                  aria-hidden='true'
                />
                {feature}
              </li>
            ))}
          </ul>
          <p className='text-black-500 mt-6 text-sm leading-7'>
            We'll be adding features little by little to improve your quick
            learning curve, but also new features to help you do big things.
          </p>
        </div>
        <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
          <div className='bg-black-50 ring-white-900/5 rounded-2xl py-10 text-center ring-1 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16'>
            <div className='mx-auto max-w-xs px-8'>
              <p className='text-base font-semibold text-black'>
                Pay once, own it forever
              </p>
              <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight text-black'>
                  $250
                </span>
                <span className='text-sm font-semibold leading-6 tracking-wide text-black'>
                  USD
                </span>
              </p>
              <a
                href='/#'
                className='mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary'
              >
                Get access
              </a>
              <p className='mt-6 text-xs leading-5 text-black'>
                Invoices and receipts available for easy company reimbursement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing1;
