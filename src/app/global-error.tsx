'use client';

import { useEffect } from 'react';

import { ErrorProps } from '@/types/error.type';
import { logError } from '@/lib/logError';
import ErrorView from '@/components/ui/ErrorView';

const GlobalError = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    logError(error);
  }, [error]);

  return (
    <html>
      <body>
        <ErrorView
          title='Something broke'
          message='Unexpected error. Please try again.'
          action={{
            label: 'Reload',
            onClick: reset,
          }}
        />
      </body>
    </html>
  );
};

export default GlobalError;
