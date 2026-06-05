import type { Metadata } from 'next';
import RepoDetails from '@/components/repo/RepoDetails';

export const metadata: Metadata = {
  title: 'Repo detailed page | GitScope',
};

const RepoDetailsPage = () => {
  return <RepoDetails />;
};

export default RepoDetailsPage;
