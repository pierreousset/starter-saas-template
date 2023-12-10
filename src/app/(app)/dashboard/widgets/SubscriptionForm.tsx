'use client';

import { toast } from '@/app/hooks/useToast';
import Button from '@/components/ui/Button';

const SubscriptionForm = ({ isSubscriber }: any) => {
  async function onSubmit(event: any) {
    event.preventDefault();
    // setIsLoading(!isLoading);

    // Get a Stripe session URL.
    const response = await fetch('/api/stripe');

    if (!response?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Please refresh the page and try again.',
        variant: 'destructive',
      });
    }

    // Redirect to the Stripe session.
    // This could be a checkout page for initial upgrade.
    // Or portal to manage existing subscription.
    const session = await response.json();
    if (session) {
      window.location.href = session.url;
    }
  }

  return (
    <form className='w-auto' onSubmit={onSubmit}>
      <Button
        className='w-[160px]'
        type='submit'
        // disabled={isLoading}
      >
        {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
        {isSubscriber ? 'Manage Subscription' : 'Upgrade to PRO'}
      </Button>
    </form>
  );
};

export default SubscriptionForm;
