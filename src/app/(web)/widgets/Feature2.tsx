import {
  FingerPrintIcon,
  UsersIcon,
  BanknotesIcon,
  AtSymbolIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Instant User Logins.',
    description:
      'Next-Auth manages authentication, offering total customization of your authentication journey, ensuring you have full command over your users data.',
    icon: UsersIcon,
  },
  {
    name: 'Lightning-Fast Payments.',
    description:
      'When it comes to user billing, choose Stripe – seamlessly integrated and primed for action. Your choice, our effortless integration.',
    icon: BanknotesIcon,
  },
  {
    name: 'Speedy Email Delivery',
    description: `With Resend's integration and our customizable email templates,
      launching email campaigns to your clients becomes effortlessly simple.`,
    icon: AtSymbolIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
];

const Feature2 = () => (
  <div className='py-24 sm:py-32'>
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='text-base font-semibold leading-7 text-primary'>
          Where speed is the essence of your success.
        </h2>
        <p className='text-text mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
          Boost Your App's Triumph, Rocket to Market, Skyrocket Your Profits.
        </p>
        <p className='mt-6 text-lg leading-8 text-primary'>
          Free yourself from the complexities of API integrations and focus on
          scaling your startup. Starter-SaaS provides you with the key
          boilerplate code for an ultra-fast launch.
        </p>
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {features.map(feature => (
            <div key={feature.name} className='relative pl-16'>
              <dt className='text-base font-semibold leading-7 text-black'>
                <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center'>
                  <feature.icon
                    className='h-6 w-6 text-primary'
                    aria-hidden='true'
                  />
                </div>
                {feature.name}
              </dt>
              <dd className='mt-2 text-base leading-7 text-black'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default Feature2;
