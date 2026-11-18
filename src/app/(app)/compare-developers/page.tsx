import { type Metadata } from 'next';
import CompareUsersClient from '@/components/compare/CompareUsersClient';

export const metadata: Metadata = {
  title: 'Compare user profiles | GitScope Analytics',
  description:
    'Compare GitHub user profiles and analyze their repositories, contributions, and activity with GitScope Analytics.',
};

const ComparePage = () => {
  return <CompareUsersClient />;
};

export default ComparePage;
