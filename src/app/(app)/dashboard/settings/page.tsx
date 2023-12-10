// import { redirect } from 'next/navigation';
// import { authOptions } from '@/lib/auth';
import getCurrentUser from '@/lib/session';
import DashboardHeader from '@/app/(app)/dashboard/widgets/DashboardHeader';
import DashboardShell from '@/widgets(app)/Shell';
import UserForm from '@/widgets(app)/UserForm';

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
};

const SettingsPage = async () => {
  const user = await getCurrentUser();

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Settings'
        text='Manage account and website settings.'
      />
      <div className='grid gap-10'>
        <UserForm user={user} />
      </div>
    </DashboardShell>
  );
};

export default SettingsPage;
