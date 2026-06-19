import type { Metadata } from 'next';
import CompareUsersClient from '@/components/compare/CompareUsersClient';

export const metadata: Metadata = {
  title: 'Compare user profiles | GitScope',
};

const ComparePage = () => {
  return <CompareUsersClient />;
};

export default ComparePage;
