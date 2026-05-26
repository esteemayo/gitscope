'use client';

import { Toaster } from 'react-hot-toast';
import { useTheme } from '@/context/ThemeContext';

const ToasterProvider = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <Toaster
      position='bottom-right'
      toastOptions={{
        duration: 3000,
        style: {
          backgroundColor: isDark ? 'rgb(23, 27, 36)' : '#ffffff',
          color: isDark ? '#f0f6fc' : 'rgb(36, 41, 46)',
          border: isDark ? '1px solid #1e293b' : '1px solid #e2e8f0',
        },
        success: {
          iconTheme: {
            primary: '#10b981',
            secondary: '#ffffff',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#ffffff',
          },
        },
      }}
    />
  );
};

export default ToasterProvider;
