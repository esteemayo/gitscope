import type { Metadata } from 'next';
import RepositoryInsightsClient from '@/components/docs/RepositoryInsightClient';

export const metadata: Metadata = {
  title: 'Repository Insights | GitScope Documentation',
};

const RepositoryInsightPage = () => {
  return <RepositoryInsightsClient />;
};

export default RepositoryInsightPage;
