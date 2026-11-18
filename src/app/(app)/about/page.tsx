import type { Metadata } from 'next';
import AboutClient from '@/components/about/AboutClient';

export const metadata: Metadata = {
  title: 'About | GitScope Analytics',
  description:
    'Learn about GitScope Analytics, a platform that provides insights into GitHub user profiles, repositories, and contributions, helping developers and teams make informed decisions.',
};

const AboutPage = () => {
  return <AboutClient />;
};

export default AboutPage;
