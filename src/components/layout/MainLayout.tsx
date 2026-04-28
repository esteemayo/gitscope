'use client';

import ClientOnly from '../ClientOnly';
import OfflineBanner from '../ui/OfflineBanner';

import ToasterProvider from '@/providers/ToasterProvider';
import ThemeProvider from '@/context/ThemeContext';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOnline } = useNetworkStatus();

  return (
    <main className='main-container'>
      <ThemeProvider>
        <ClientOnly>
          <ToasterProvider />
          {!isOnline && <OfflineBanner />}
          {children}
        </ClientOnly>
      </ThemeProvider>
    </main>
  );
};

export default MainLayout;
