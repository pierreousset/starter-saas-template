'use client';

import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Label from '@/components/ui/Label';
import { useToast } from '@/app/hooks/useToast';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const login = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const reponse = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    const formatResponse = JSON.parse(reponse?.error as string);

    if (!reponse?.error) {
      router?.push('/dashboard');
    } else {
      toast({
        title: 'Error',
        description: `${formatResponse[0]?.message}`,
        variant: 'destructive',
      });
    }
  };

  return (
    <form className='space-y-6' onSubmit={login}>
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
