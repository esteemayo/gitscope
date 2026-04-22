'use client';

import ClientOnly from '../ClientOnly';
import OfflineBanner from '../ui/OfflineBanner';

import ToasterProvider from '@/providers/ToasterProvider';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOnline } = useNetworkStatus();

  return (
    <main className='main-container'>
      <ClientOnly>
        <ToasterProvider />
        {!isOnline && <OfflineBanner />}
        {children}
      </ClientOnly>
    </main>
  );
};

export default MainLayout;
