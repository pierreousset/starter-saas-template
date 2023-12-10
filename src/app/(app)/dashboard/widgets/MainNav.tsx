'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { MainNavItem } from '@/types/index';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { LockClosedIcon, CommandLineIcon } from '@heroicons/react/20/solid';
import MobileNav from './MobileNav';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const MainNav = ({ items, children }: MainNavProps) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href='/dashboard' className='hidden items-center space-x-2 md:flex'>
        <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className='hidden gap-6 md:flex'>
          {items?.map(item => (
            <Link
              key={`link-${item}`}
              href={item.disabled ? '/#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                item.href.startsWith(`/${segment}`)
                  ? 'text-foreground'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <Button
        className='flex items-center space-x-2 md:hidden'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <LockClosedIcon /> : <CommandLineIcon />}
        <span className='font-bold'>Menu</span>
      </Button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
};

MainNav.defaultProps = {
  items: [],
  children: undefined,
};

export default MainNav;
