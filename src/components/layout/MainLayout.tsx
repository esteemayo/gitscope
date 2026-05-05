'use client';

import { usePathname } from 'next/navigation';

import OfflineBanner from '../ui/OfflineBanner';
import ClientOnly from '../ClientOnly';
import ThemeSelector from '../ui/ThemeSelector';

import ToasterProvider from '@/providers/ToasterProvider';
import ThemeProvider from '@/context/ThemeContext';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isOnline } = useNetworkStatus();

  return (
    <main className='main-container'>
      <ThemeProvider>
        <ClientOnly>
          <ToasterProvider />

          {!isOnline && <OfflineBanner />}

          {pathname === '/' && <ThemeSelector />}

          {children}
        </ClientOnly>
      </ThemeProvider>
    </main>
  );
};

export default MainLayout;
