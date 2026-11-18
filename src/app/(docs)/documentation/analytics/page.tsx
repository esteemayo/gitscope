import { type Metadata } from 'next';
import AnalyticsOverviewClient from '@/components/docs/analytics/AnalyticsOverviewClient';

export const metadata: Metadata = {
  title: 'Analytics Overview | GitScope Analytics Documentation',
  description:
    'Understand how GitScope organizes GitHub data into profile, repository, language, and contribution analytics.',
};

const AnalyticsOverviewPage = () => {
  return <AnalyticsOverviewClient />;
};

export default AnalyticsOverviewPage;
