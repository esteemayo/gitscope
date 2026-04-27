'use client';

import { useEffect } from 'react';

import { ErrorProps } from '@/types/error.type';
import { logError } from '@/lib/logError';
import ErrorView from '@/components/ui/ErrorView';

const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    logError(error);
  }, [error]);

  return (
    <ErrorView
      title='Failed to load profile'
      message="We couldn't load this profile. Check the username or try again."
      action={{
        label: 'Retry',
        onClick: reset,
      }}
      meta={error?.digest ? `Ref: ${error.digest}` : undefined}
    />
  );
};

export default ErrorPage;
