'use client';

import { useSession } from 'next-auth/react';
import SidebarStatItem from './SidebarStatItem';

import { formatDate } from '@/utils/formatDate';
import { useGithubUser } from '@/hooks/useGithubUser';

import '../../styles/components/sidebar/SidebarStats.scss';

const SidebarStats = () => {
  const { status } = useSession();
  const { data: githubUser, isLoading } = useGithubUser();

  if (status === 'unauthenticated') return null;

  return (
    <section className='sidebar-stats'>
      {/* <SidebarStatItem
        label='Repositories synced'
        value={githubUser?.public_repos ?? 0}
      /> */}

      <SidebarStatItem
        label='Public repositories'
        value={githubUser?.public_repos ?? 0}
      />

      <SidebarStatItem
        label='GithHub Followers'
        value={githubUser?.followers ?? 0}
      />

      <SidebarStatItem label='Following' value={githubUser?.following ?? 0} />

      <SidebarStatItem
        label='Member since'
        value={
          githubUser?.created_at
            ? formatDate(githubUser.created_at, true)
            : 'Unknown'
        }
      />
    </section>
  );
};

export default SidebarStats;
