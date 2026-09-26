import type { Metadata } from 'next';
import ApiErrorsClient from '@/components/docs/api/ApiErrorsClient';

export const metadata: Metadata = {
  title: 'API Errors | GitScope Documentation',
  description:
    'Understand how GitScope API errors are structured, interpreted, and handled by applications.',
};

const ApiErrorsPage = () => {
  return <ApiErrorsClient />;
};

export default ApiErrorsPage;
