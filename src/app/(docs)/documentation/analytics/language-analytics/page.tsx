import type { Metadata } from 'next';
import LanguageAnalyticsClient from '@/components/docs/analytics/language/LanguageAnalyticsClient';

export const metadata: Metadata = {
  title: 'Language Analytics | GitScope Documentation',
  description:
    'Explore the programming languages represented across a GitHub profile and understand how GitScope organizes language data.',
};

const LanguageAnalyticsPage = () => {
  return <LanguageAnalyticsClient />;
};

export default LanguageAnalyticsPage;
