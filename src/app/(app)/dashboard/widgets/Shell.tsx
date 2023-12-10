import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface DashboardShellProps extends HTMLAttributes<HTMLDivElement> {}
const DashboardShell = ({
  children,
  className,
  ...props
}: DashboardShellProps) => (
  <div className={cn('grid items-start gap-8', className)} {...props}>
    {children}
  </div>
);

export default DashboardShell;
