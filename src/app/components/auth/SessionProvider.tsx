'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface SessionProviderProps {
  session: any;
  children: React.ReactNode;
}

const SessionProviderAPP: React.FC<SessionProviderProps> = ({
  session,
  children,
}) => <SessionProvider session={session}>{children}</SessionProvider>;

export default SessionProviderAPP;
