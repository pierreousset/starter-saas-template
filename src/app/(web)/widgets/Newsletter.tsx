import Label from '@/components/ui/Label';

const Newsletter = () => (
  <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
    <div className='mx-auto max-w-screen-md sm:text-center'>
      <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl'>
        Sign up for our newsletter
      </h2>
      {/* Si vous voulez rajouté un subtitle */}
      {/* <p className='mx-auto mb-8 max-w-2xl leading-8 text-primary'>
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p> */}
      <form action='#'>
        <div className='mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0'>
          <div className='relative w-full'>
            <Label
              htmlFor='email'
              className='mb-2 hidden text-sm font-medium text-accent'
            >
              Email address
            </Label>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='text-gray h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
            </div>
            <input
              className='text-gray focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm sm:rounded-none sm:rounded-l-lg'
              placeholder='Enter your email'
              type='email'
              id='email'
              required
            />{' '}
          </div>
          <div>
            <button
              type='submit'
              className='bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-primary-300 w-full cursor-pointer rounded-lg border px-5 py-3 text-center text-sm font-medium text-black focus:ring-4 sm:rounded-none sm:rounded-r-lg'
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className='newsletter-form-footer mx-auto max-w-screen-sm text-left text-sm text-primary'>
          We care about the protection of your data.{' '}
          <a
            href='/#'
            className='font-medium text-muted-foreground hover:underline'
          >
            Read our Privacy Policy
          </a>
          .
        </div>
      </form>
    </div>
  </div>
);

export default Newsletter;
