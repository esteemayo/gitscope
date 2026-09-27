import type { Metadata } from 'next';
import ChangelogClient from '@/components/docs/resources/ChangelogClient';

export const metadata: Metadata = {
  title: 'Changelog - GitScope Documentation',
  description:
    'Stay up-to-date with the latest changes, updates, and improvements in GitScope. Explore our changelog for detailed information on new features, bug fixes, and enhancements.',
};

const ChangelogPage = () => {
  return <ChangelogClient />;
};

export default ChangelogPage;
