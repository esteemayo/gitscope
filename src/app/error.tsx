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
      title='Something went wrong'
      message='An unexpected error occurred.'
      action={{
        label: 'Try Again',
        onClick: reset,
      }}
      meta={error?.digest ? `Ref: ${error.digest}` : undefined}
    />
  );
};

export default ErrorPage;
