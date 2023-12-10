import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeadBlock = () => (
  <div className='mb-10 text-center'>
    <h1 className='mx-auto max-w-3xl text-5xl font-bold lg:text-7xl'>
      Revolutionize Your <span className='text- text-primary'>SaaS</span>{' '}
      Development
    </h1>
    <p className='mt-5 text-lg opacity-75'>
      Why complicate when you can simplify? Our NextJS boilerplate is your
      turnkey
    </p>
    <p className='mt-1 text-lg opacity-75'>
      solution for developing web applications, SaaS, or AI tools. Maximize your
      productivity
    </p>
    <p className='mt-1 text-lg opacity-75'>
      and innovate without limits. From concept to production, do it in style
      and speed.
    </p>
    <div className='mt-6 flex flex-col items-center justify-center gap-3 md:flex-row'>
      <Button asChild>
        <a href='#pricing'>Get started →</a>
      </Button>
      <Button asChild>
        <a href='https://docs.starter-saas.com'>Documentation</a>
      </Button>
    </div>
    <div className='mt-32 px-8 text-center'>
      <h5 className='text-xs font-semibold uppercase tracking-wider text-muted-foreground/50'>
        Built &amp; shipped with these awesome tools
      </h5>
      <div className='mt-4 flex flex-col-reverse items-center justify-center gap-4 text-muted-foreground/50 md:flex-row md:gap-8'>
        <div className='h-10 w-auto'>
          <Image
            src='/vercel.svg'
            alt='Starter-saas Logo'
            width={120}
            height={120}
            priority
          />
        </div>
        <div className='h-30 w-auto'>
          <Image
            src='/starter-saas.png'
            alt='Starter-saas Logo'
            width={93}
            height={93}
            priority
          />
        </div>
        <div className='h-10 w-auto'>
          <Image
            src='/next.svg'
            alt='Starter-saas Logo'
            width={120}
            height={120}
            priority
          />
        </div>
      </div>
    </div>
  </div>
);

export default HeadBlock;
