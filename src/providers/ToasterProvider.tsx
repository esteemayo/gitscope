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
          backgroundColor: isDark
            ? 'var(--color-gray-700)'
            : 'var(--color-white-50)',
          color: isDark ? '#f0f6fc' : 'rgb(36, 41, 46)',
          border: isDark
            ? '1px solid var(--color-gray-600)'
            : '1px solid var(--color-gray-300)',
        },
        success: {
          iconTheme: {
            primary: 'var(--color-green-300)',
            secondary: 'var(--color-white-50)',
          },
        },
        error: {
          iconTheme: {
            primary: 'var(--color-red-700)',
            secondary: 'var(--color-white-50)',
          },
        },
      }}
    />
  );
};

export default ToasterProvider;
