'use client';

import { useRouter } from 'next/navigation';
import ErrorView from './ui/ErrorView';

const NotFound = ({ title, message }: { title?: string, message?: string }) => {
  const router = useRouter();

  return (
    <ErrorView
      title={title || 'Page not found'}
      message={message || 'This page does not exist.'}
      action={{
        label: 'Go back',
        onClick: router.back,
      }}
    />
  );
};

export default NotFound;
