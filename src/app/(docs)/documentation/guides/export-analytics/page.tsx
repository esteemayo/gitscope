import type { Metadata } from 'next';
import ExportAnalyticsClient from '@/components/docs/guides/ExportAnalyticsClient';

export const metadata: Metadata = {
  title: 'Export Analytics - Guides | GitScope Documentation',
  description:
    'Learn how to export analytics using GitScope, including insights into contributions, repositories, and more.',
};

const ExportAnalyticsPage = () => {
  return <ExportAnalyticsClient />;
};

export default ExportAnalyticsPage;
