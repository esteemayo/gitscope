'use client';

import { useEffect } from 'react';

import { ErrorProps } from '@/types/error.type';
import ErrorView from '@/components/ui/ErrorView';

const GlobalError = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <ErrorView
          code='System Error'
          title='Something broke'
          description='Unexpected error. Please try again.'
          primaryAction={{
            label: 'Reload',
            onClick: reset,
          }}
        />
      </body>
    </html>
  );
};

export default GlobalError;
