import Image from 'next/image';
import UserAccountNav from '@/widgets/UserAccountNav';
import Button from '@/components/ui/Button';
import { useCallback } from 'react';

const Header = ({ user }: any) => {
  const AuthButton = useCallback(() => {
    if (user) {
      return (
        <UserAccountNav
          user={{
            name: user?.name,
            image: user?.image,
            email: user?.email,
          }}
        />
      );
    }
    return (
      <Button asChild>
        <a href='/login'>Login</a>
      </Button>
    );
  }, [user]);

  return (
    <div className='text-text container z-10 mx-auto bg-opacity-75 px-2'>
      <div className='flex items-center justify-stretch gap-6 py-8'>
        <div className='flex flex-1 justify-start'>
          <a className='block hover:no-underline active:no-underline' href='/'>
            {/* Our logo here */}
            <Image
              src='/starter-saas.png'
              alt='Starter-saas Logo'
              width={120}
              height={120}
              priority
            />
          </a>
        </div>
        <div className='hidden flex-1 items-center justify-center md:flex'>
          <a className='block px-3 py-2 text-lg' href='/pricing'>
            Demo Pricing Page
          </a>
          <a
            className='block px-3 py-2 text-lg'
            href='https://docs.starter-saas.com'
          >
            Docs
          </a>
        </div>
        <div className='flex flex-1 items-center justify-end gap-3'>
          <AuthButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
