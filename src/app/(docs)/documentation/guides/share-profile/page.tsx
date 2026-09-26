import type { Metadata } from 'next';
import ShareProfileClient from '@/components/docs/guides/ShareProfileClient';

export const metadata: Metadata = {
  title: 'Share a Profile - Guides | GitScope Documentation',
  description:
    'Learn how to share your GitHub profile using GitScope, including insights into contributions, repositories, and more.',
};

const ShareProfilePage = () => {
  return <ShareProfileClient />;
};

export default ShareProfilePage;
