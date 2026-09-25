import type { Metadata } from 'next';
import CompareDevelopersClient from '@/components/docs/CompareDevelopersClient';

export const metadata: Metadata = {
  title: 'Compare Developers | GitScope Documentation',
};

const CompareDevelopersPage = () => {
  return <CompareDevelopersClient />;
};

export default CompareDevelopersPage;
