import type { Metadata } from 'next';
import ApiEndpointsClient from '@/components/docs/api/ApiEndpointsClient';

export const metadata: Metadata = {
  title: 'API Endpoints | GitScope Documentation',
  description:
    'Understand how GitScope API endpoints are organized and how to identify the resource required by your application.',
};

const ApiEndpointsPage = () => {
  return <ApiEndpointsClient />;
};

export default ApiEndpointsPage;
