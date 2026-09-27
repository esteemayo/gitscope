import type { Metadata } from 'next';
import RoadmapClient from '@/components/docs/resources/RoadmapClient';

export const metadata: Metadata = {
  title: 'Roadmap | GitScope Documentation',
  description:
    'Explore the GitScope project roadmap, including planned features, improvements, and future development goals.',
};

const RoadmapPage = () => {
  return <RoadmapClient />;
};

export default RoadmapPage;
