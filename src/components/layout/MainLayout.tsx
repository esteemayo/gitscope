'use client';

import { usePathname } from 'next/navigation';

import OfflineBanner from '../ui/OfflineBanner';
import ClientOnly from '../ClientOnly';
import ThemeSelector from '../ui/ThemeSelector';

import ToasterProvider from '@/providers/ToasterProvider';
import AuthProvider from '@/providers/AuthProvider';
import SkeletonProvider from '@/providers/SkeletonProvider';
import QueryProvider from '@/providers/QueryProvider';

import ThemeProvider from '@/context/ThemeContext';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isOnline } = useNetworkStatus();

  return (
    <main className='main-container'>
      <QueryProvider>
        <AuthProvider>
          <ThemeProvider>
            <ToasterProvider />

            <ClientOnly>
              {!isOnline && <OfflineBanner text='No internet connection.' />}

              {pathname === '/' && <ThemeSelector />}

              <SkeletonProvider>{children}</SkeletonProvider>
            </ClientOnly>
          </ThemeProvider>
        </AuthProvider>
      </QueryProvider>
    </main>
  );
};

export default MainLayout;
