'use client';

import { useEffect } from 'react';

import { ErrorProps } from '@/types/error.type';
import ErrorView from '@/components/ui/ErrorView';

const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorView
      code='Error'
      title='Failed to load profile'
      description="We couldn't load this profile. Check the username or try again."
      primaryAction={{
        label: 'Retry',
        onClick: reset,
      }}
      meta={error?.digest ? `Ref: ${error.digest}` : undefined}
    />
  );
};

export default ErrorPage;
