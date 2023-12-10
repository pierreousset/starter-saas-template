'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SidebarNavItem } from '@/types/index';
import { cn } from '@/lib/utils';

interface DashboardNavProps {
  items: SidebarNavItem[];
}

const DashboardNav = ({ items }: DashboardNavProps) => {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className='grid items-start gap-2'>
      {items.map(
        item =>
          item.href && (
            <Link key={`link-${item}`} href={item.disabled ? '/' : item.href}>
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  path === item.href ? 'bg-accent' : 'transparent',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                <span>{item.title}</span>
              </span>
            </Link>
          )
      )}
    </nav>
  );
};

export default DashboardNav;
