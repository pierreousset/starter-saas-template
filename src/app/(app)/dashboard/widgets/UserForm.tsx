'use client';

// import { useRouter } from 'next/navigation';
import { toast } from '@/app/hooks/useToast';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
// import Label from '@/components/ui/Label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2).max(15),
  email: z.string().min(2).max(50),
});

const UserForm = ({ user }: any) => {
  // const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name || '',
      email: user.email || '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch('/api/profile/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
      }),
    });
    const responseBody = await response.json();

    if (!response?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Please refresh the page and try again.',
        variant: 'destructive',
      });
    }
    return toast({
      title: `✅ - ${responseBody.message}`,
      description: 'Please refresh the page and try again.',
      variant: 'starterGreen',
    });
  };

  return (
    <Form {...form}>
      <form
        className='ml-1 flex-1 space-y-8 lg:max-w-2xl'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button
            className='flex w-auto justify-center text-sm font-semibold'
            type='submit'
          >
            Update profile
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserForm;
