import getCurrentUser from '@/lib/session';
import { redirect } from 'next/navigation';
import { getUserSubscriptionPlan } from '@/lib/subscription';
import { authOptions } from '@/lib/auth';
import DashboardHeader from '@/app/(app)/dashboard/widgets/DashboardHeader';
import SubscriptionPlan from '@/widgets(app)/SubscriptionPlan';

import DashboardShell from '@/widgets(app)/Shell';
import SubscriptionForm from '@/widgets(app)/SubscriptionForm';

export const metadata = {
  title: 'Billing',
  description: 'Manage billing and your subscription plan.',
};

const BillingPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login');
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user?.id as string);

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Billing'
        text='Manage billing and your subscription plan.'
      />
      <SubscriptionForm isSubscriber={subscriptionPlan.isSubscriber} />
      <div className='grid w-auto grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
        <SubscriptionPlan subscriptionPlan={subscriptionPlan} />
      </div>
    </DashboardShell>
  );
};

export default BillingPage;
