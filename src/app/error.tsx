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
      title='Something went wrong'
      description='An unexpected error occurred.'
      primaryAction={{
        label: 'Try Again',
        onClick: reset,
      }}
      meta={error?.digest ? `Ref: ${error.digest}` : undefined}
    />
  );
};

export default ErrorPage;
