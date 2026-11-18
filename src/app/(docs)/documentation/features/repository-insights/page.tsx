import { type Metadata } from 'next';
import RepositoryInsightsClient from '@/components/docs/features/RepositoryInsightClient';

export const metadata: Metadata = {
  title: 'Repository Insights | GitScope Analytics Documentation',
};

const RepositoryInsightPage = () => {
  return <RepositoryInsightsClient />;
};

export default RepositoryInsightPage;
