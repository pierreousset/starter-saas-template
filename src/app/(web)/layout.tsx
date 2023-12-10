import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { Theme } from '@radix-ui/themes';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/auth/SessionProvider';
import getCurrentUser from '@/lib/session';
import Toaster from '@/components/ui/Toaster';
import '@radix-ui/themes/styles.css';
import '../globals.css';

import Header from '@/widgets(web)/Header';
import Footer from '@/widgets(web)/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Starter-SaaS',
  description: `The site that's going to help launched a SAAS easily.`,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession();
  const user = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={session}>
          {/* <Theme appearance='light' accentColor='red' radius='medium'> */}
          <Header user={user} session={session} />
          {children}
          <Footer />
          <Toaster />
          {/* </Theme> */}
        </SessionProvider>
      </body>
    </html>
  );
}
