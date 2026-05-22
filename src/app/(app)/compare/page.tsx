import type { Metadata } from 'next';
import CompareUsers from '@/components/compare/CompareUsers';

export const metadata: Metadata = {
  title: 'Compare user profiles | GitScope',
};

const ComparePage = () => {
  return <CompareUsers />;
};

export default ComparePage;
