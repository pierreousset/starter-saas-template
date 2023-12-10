'use client';

import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Label from '@/components/ui/Label';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch(`api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });

    if (response.ok) {
      router?.push('/login');
    }
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <div>
        <Label htmlFor='name'>Name</Label>
        <div className='mt-2'>
          <Input
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor='email'>Email address</Label>
        <div className='mt-2'>
          <Input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            required
          />
        </div>
      </div>
      <div>
        <div className='flex items-center justify-between'>
          <Label htmlFor='password'>Password</Label>
          <div className='text-sm'>
            <a href='/#' className='font-semibold text-black hover:text-accent'>
              Forgot password?
            </a>
          </div>
        </div>
        <div className='mt-2'>
          <Input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
          />
        </div>
      </div>
      <div>
        <Button className='flex w-full justify-center text-sm font-semibold'>
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
