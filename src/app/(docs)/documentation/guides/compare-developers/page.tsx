import type { Metadata } from 'next';
import CompareDevelopersGuideClient from '@/components/docs/guides/CompareDevelopersGuideClient';

export const metadata: Metadata = {
  title: 'Compare Developers - Guides | GitScope Documentation',
  description:
    'Learn how to compare developers using GitScope, including insights into contributions, repositories, and more.',
};

const CompareDevelopersGuidePage = () => {
  return <CompareDevelopersGuideClient />;
};

export default CompareDevelopersGuidePage;
