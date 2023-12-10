import CardSkeleton from '@/widgets(app)/CardSkeleton';
import DashboardHeader from '@/app/(app)/dashboard/widgets/DashboardHeader';
import DashboardShell from '@/widgets(app)/Shell';

const DashboardBillingLoading = () => (
  <DashboardShell>
    <DashboardHeader
      heading='Billing'
      text='Manage billing and your subscription plan.'
    />
    <div className='grid gap-10'>
      <CardSkeleton />
    </div>
  </DashboardShell>
);
export default DashboardBillingLoading;
