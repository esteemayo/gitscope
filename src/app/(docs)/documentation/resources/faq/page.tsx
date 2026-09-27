import type { Metadata } from 'next';
import ResourcesFaqClient from '@/components/docs/resources/ResourcesFaqClient';

export const metadata: Metadata = {
  title: 'GitScope Resources FAQ | GitScope Documentation',
  description:
    'Find answers to common questions about GitScope, its analytics, authentication, and documentation.',
};

const ResourcesFaqPage = () => {
  return <ResourcesFaqClient />;
};

export default ResourcesFaqPage;
