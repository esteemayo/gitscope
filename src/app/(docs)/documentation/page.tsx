import type { Metadata } from 'next';
import DocsHome from '@/components/docs/home/DocsHome';

export const metadata: Metadata = {
  title: 'Documentation | GitScope Documentation',
  description:
    'Explore the comprehensive GitScope documentation, including key concepts, features, analytics, and resources to help you understand and utilize the platform effectively.',
};

const DocsPage = () => {
  return <DocsHome />;
};

export default DocsPage;
