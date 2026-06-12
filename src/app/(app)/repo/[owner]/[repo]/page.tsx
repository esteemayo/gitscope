import type { Metadata } from 'next';
import RepoDetails from '@/components/repo/RepoDetails';

interface IParams {
  params: Promise<{ owner: string; repo: string }>;
}

export const metadata: Metadata = {
  title: 'Repo detailed page | GitScope',
};

const RepoDetailsPage = async ({ params }: IParams) => {
  const { repo } = await params;

  return <RepoDetails repositoryName={repo} />;
};

export default RepoDetailsPage;
