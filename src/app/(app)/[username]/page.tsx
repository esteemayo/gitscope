import type { Metadata } from 'next';
import DashboardClient from '@/components/dashboard/DashboardClient';

interface IParams {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const { username } = await params;

  const capitalizedUsername =
    username.slice(0, 1).toUpperCase().concat(username.slice(1));

  return {
    title: `${capitalizedUsername}'s GitScope Dashboard`,
  };
}

const UserPage = async ({ params }: IParams) => {
  const { username } = await params;

  return <DashboardClient username={username} />;
};

export default UserPage;
