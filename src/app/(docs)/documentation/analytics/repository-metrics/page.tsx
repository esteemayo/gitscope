import type { Metadata } from 'next';
import RepositoryMetricsClient from '@/components/docs/analytics/RepositoryMetricsClient';

export const metadata: Metadata = {
  title: 'Repository Metrics | GitScope Documentation',
  description: 'Examine projects and the activity associated with them.',
};

const RepositoryMetricsPage = () => {
  return <RepositoryMetricsClient />;
};

export default RepositoryMetricsPage;
