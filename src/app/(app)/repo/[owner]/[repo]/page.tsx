import { type Metadata } from 'next';
import RepoDetailsClient from '@/components/repo/RepoDetailsClient';

interface IParams {
  params: Promise<{ owner: string; repo: string }>;
}

export const metadata: Metadata = {
  title: 'Repo detailed page | GitScope Analytics',
  description:
    'Explore GitHub repository details, including code, issues, pull requests, and contributors with GitScope Analytics.',
};

const RepoDetailsPage = async ({ params }: IParams) => {
  const { repo } = await params;

  return <RepoDetailsClient repo={repo} />;
};

export default RepoDetailsPage;
