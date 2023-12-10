import { getProviders } from 'next-auth/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import LoginForm from './LoginForm';
import LoginButtonForm from './LoginButtonForm';

export default async function RegisterPage() {
  const providers = await getProviders();

  return (
    <div className='flex justify-center'>
      <Card className='w-[490px]'>
        <div className='p-6'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl'>Create an account</CardTitle>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <div className='grid gap-6'>
              <LoginButtonForm providers={providers} />
            </div>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  Or continue with
                </span>
              </div>
            </div>
            <LoginForm />
            <CardFooter className='flex justify-center'>
              <p className='mt-5 text-center text-sm text-primary'>
                <a
                  href='/login'
                  className='font-semibold leading-6 text-primary hover:text-indigo-500'
                >
                  Already have an account?
                </a>
              </p>
            </CardFooter>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
