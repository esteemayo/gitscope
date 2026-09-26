import type { Metadata } from 'next';
import AnalyzeProfileClient from '@/components/docs/guides/AnalyzeProfileClient';

export const metadata: Metadata = {
  title: 'Analyze Profile - Guides | GitScope Documentation',
  description:
    'Learn how to analyze your GitHub profile using GitScope, including insights into contributions, repositories, and more.',
};

const AnalyzeProfilePage = () => {
  return <AnalyzeProfileClient />;
};

export default AnalyzeProfilePage;
