import type { Metadata } from 'next';
import ContributionAnalyticsClient from '@/components/docs/analytics/ContributionAnalyticsClient';

export const metadata: Metadata = {
  title: 'Contribution Analytics | GitScope Documentation',
  description:
    'Discover the contribution patterns of a GitHub profile and understand how GitScope visualizes contribution data.',
};

const ContributionAnalyticsPage = () => {
  return <ContributionAnalyticsClient />;
};

export default ContributionAnalyticsPage;
