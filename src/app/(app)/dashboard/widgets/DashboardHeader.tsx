import type { ReactNode } from 'react';

interface DashboardHeaderProps {
  heading: string;
  text: string;
  children?: ReactNode;
}

const DashboardHeader = ({ heading, text, children }: DashboardHeaderProps) => (
  <div className='flex items-center justify-between px-2'>
    <div className='grid gap-1'>
      <h1 className='font-heading text-3xl md:text-4xl'>{heading}</h1>
      {text && <p className='text-lg text-muted-foreground'>{text}</p>}
    </div>
    {children}
  </div>
);

DashboardHeader.defaultProps = {
  children: undefined,
};

export default DashboardHeader;
