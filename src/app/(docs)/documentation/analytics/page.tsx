import type { Metadata } from 'next';
import AnalyticsOverviewClient from '@/components/docs/analytics/overview/AnalyticsOverviewClient';

export const metadata: Metadata = {
  title: 'Analytics Overview | GitScope',
  description:
    'Understand how GitScope organizes GitHub data into profile, repository, language, and contribution analytics.',
};

const AnalyticsOverviewPage = () => {
  return <AnalyticsOverviewClient />;
};

export default AnalyticsOverviewPage;
