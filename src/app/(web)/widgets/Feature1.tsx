import {
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
];

const Feature1 = () => (
  <div className='overflow-hidden py-24 sm:py-32'>
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
        <div className='lg:pr-8 lg:pt-4'>
          <div className='lg:max-w-lg'>
            <h2 className='text-base font-semibold leading-7 text-primary'>
              Where speed is the essence of your success.
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl'>
              Boost Your App's Triumph, Rocket to Market, Skyrocket Your
              Profits.
            </p>
            <p className='mt-6 text-lg leading-8 text-black'>
              Free yourself from the complexities of API integrations and focus
              on scaling your startup. Starter-SaaS provides you with the key
              boilerplate code for an ultra-fast launch.
            </p>
            <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-black lg:max-w-none'>
              {features.map(feature => (
                <div key={feature.name} className='relative pl-9'>
                  <dt className='inline font-semibold text-black'>
                    <feature.icon
                      className='absolute left-1 top-1 h-5 w-5 text-primary'
                      aria-hidden='true'
                    />
                    {feature.name}
                  </dt>{' '}
                  <dd className='inline'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <img
          src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
          alt='Product screenshot'
          className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
          width={2432}
          height={1442}
        />
      </div>
    </div>
  </div>
);

export default Feature1;
