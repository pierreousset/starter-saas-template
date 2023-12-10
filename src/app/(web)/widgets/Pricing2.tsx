import Button from '@/components/ui/Button';
import { useCallback } from 'react';

const Pricing2 = () => {
  const proFeature = [
    'All templates',
    'Figma files',
    'Free Updates',
    'Fully Responsive',
    'Lifetime Support',
  ];

  const ProFeatureMap = useCallback(
    () =>
      proFeature.map(item => (
        <li
          key={`feature-${item}`}
          className='mb-2 flex items-center text-base font-medium tracking-tight text-white'
        >
          <span className='mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-white'>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2.5'
              className='h-3 w-3'
              viewBox='0 0 24 24'
            >
              <path d='M20 6L9 17l-5-5' />
            </svg>
          </span>
          <strong>{item}</strong>
        </li>
      )),
    []
  );

  const basicFeature = [
    { text: 'All templates', isIncluded: true },
    { text: 'Figma files', isIncluded: true },
    { text: 'Free Updates', isIncluded: false },
    { text: 'Fully Responsive', isIncluded: false },
    { text: 'Lifetime Support', isIncluded: false },
  ];

  const BasicFeatureMap = useCallback(
    () =>
      basicFeature.map(item => (
        <li
          key={`feature-${item}`}
          className={`mb-2 flex items-center text-base font-medium tracking-tight text-${
            item.isIncluded ? 'black' : 'neutral-600'
          }`}
        >
          <span
            className={`mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-${
              item.isIncluded ? 'black' : 'neutral-600'
            }`}
          >
            {item.isIncluded ? (
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.5'
                className='h-3 w-3'
                viewBox='0 0 24 24'
              >
                <path d='M20 6L9 17l-5-5' />
              </svg>
            ) : (
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.5'
                className='h-3 w-3'
                viewBox='0 0 24 24'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            )}
          </span>
          {item.isIncluded ? <strong>{item.text}</strong> : item.text}
        </li>
      )),
    []
  );

  return (
    <section>
      <div className='relative mx-auto w-full max-w-7xl items-center py-24 md:px-12 lg:px-16'>
        <div className='mx-auto flex w-full flex-wrap items-start justify-center gap-4 px-5 lg:px-0'>
          <div className='w-full md:text-center lg:w-2/6 lg:text-left xl:w-1/3'>
            <div className='flex flex-col p-8 lg:p-0'>
              <strong className='mb-1 text-xs font-semibold uppercase tracking-widest text-primary'>
                Safe payments with Gumroad
              </strong>
              <span className='tracking-relaxed mb-8 text-2xl font-bold text-black lg:text-5xl'>
                Pricing
              </span>
              <p className='mx-auto mb-4 text-xl font-light text-black text-opacity-70 lg:pr-10'>
                Use the free templates with your whole team or choose a premium.
              </p>
              <p className='mx-auto mb-2 text-xl font-light text-black text-opacity-70 lg:pr-10'>
                Get the bundle and get lifetime support and one year updates.
              </p>
            </div>
          </div>
          <div className='w-full md:w-2/6 xl:w-1/4'>
            <div className='relative flex h-full flex-col rounded-xl bg-gray-50 p-8 hover:border-white'>
              <span className='mb-4 text-base font-medium uppercase tracking-widest text-neutral-600'>
                Starter
              </span>
              <span className='mb-8 flex items-center text-base font-medium tracking-tight text-neutral-600'>
                Try and decide.
              </span>
              <div className='mb-8 flex items-end text-3xl font-black leading-none text-neutral-600 lg:text-4xl'>
                <span>$100</span>
              </div>
              <ul>
                <BasicFeatureMap />
              </ul>
              <div className='mt-8'>
                {/* Connect buttons to return your customer to the registration page */}
                <Button
                  type='button'
                  className='w-full border-white bg-white px-10 py-3.5 text-center text-base font-medium text-primary hover:bg-white hover:text-black'
                >
                  Télécharger
                </Button>
              </div>
            </div>
          </div>
          <div className='w-full md:w-2/6 xl:w-1/4'>
            <div className='relative flex h-full flex-col rounded-xl bg-primary p-8 hover:border-white'>
              <span className='mb-4 text-base font-medium uppercase tracking-widest text-white'>
                Bundle
              </span>
              <span className='mb-8 flex items-center text-base font-medium tracking-tight text-white'>
                No need to subscribe
              </span>
              <div className='mb-8 flex items-end text-3xl font-black leading-none text-white lg:text-4xl'>
                <span>
                  <span>$69</span>
                  <del className='pl-2 text-2xl font-normal text-white'>
                    $149
                  </del>
                </span>
              </div>
              <ul>
                <ProFeatureMap />
              </ul>
              <div className='mt-8'>
                {/* Connect buttons to return your customer to the registration page or payment page */}
                <Button
                  type='button'
                  className='w-full border-white bg-white text-center text-base font-medium text-primary hover:bg-white hover:text-black'
                >
                  Buy for $69
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
