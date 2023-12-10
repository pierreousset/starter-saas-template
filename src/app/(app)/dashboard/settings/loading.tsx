import CardSkeleton from '@/widgets(app)/CardSkeleton';
import DashboardHeader from '@/app/(app)/dashboard/widgets/DashboardHeader';
import DashboardShell from '@/widgets(app)/Shell';

const DashboardSettingsLoading = () => (
  <DashboardShell>
    <DashboardHeader
      heading='Settings'
      text='Manage account and website settings.'
    />
    <div className='grid gap-10'>
      <CardSkeleton />
    </div>
  </DashboardShell>
);

export default DashboardSettingsLoading;
