import type { Metadata } from 'next';
import RepoDetailsClient from '@/components/repo/RepoDetailsClient';

interface IParams {
  params: Promise<{ owner: string; repo: string }>;
}

export const metadata: Metadata = {
  title: 'Repo detailed page | GitScope',
};

const RepoDetailsPage = async ({ params }: IParams) => {
  const { repo } = await params;

  return <RepoDetailsClient repo={repo} />;
};

export default RepoDetailsPage;
