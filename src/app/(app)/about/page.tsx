import type { Metadata } from 'next';
import AboutClient from '@/components/about/AboutClient';

export const metadata: Metadata = {
  title: 'About | GitScope',
};

const AboutPage = () => {
  return <AboutClient />;
};

export default AboutPage;
