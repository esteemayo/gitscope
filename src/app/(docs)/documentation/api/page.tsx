import type { Metadata } from 'next';
import ApiOverviewClient from '@/components/docs/api/ApiOverviewClient';

export const metadata: Metadata = {
  title: 'API Overview | GitScope Documentation',
  description:
    'Understand the GitScope API, its purpose, available resources, and how API requests fit into the platform.',
};

const ApiOverviewPage = () => {
  return <ApiOverviewClient />;
};

export default ApiOverviewPage;
