'use client';

import { useSession } from 'next-auth/react';
import SidebarStatItem from './SidebarStatItem';

import '../../styles/components/sidebar/SidebarStats.scss';

const SidebarStats = () => {
  const { status } = useSession();

  if (status === 'unauthenticated') return null;

  return (
    <section className='sidebar-stats'>
      <SidebarStatItem label='Repositories synced' value={128} />

      <SidebarStatItem label='Public repositories' value={201} />

      <SidebarStatItem label='Followers' value={15} />

      <SidebarStatItem label='Last sync' value='2 mins ago' />
    </section>
  );
};

export default SidebarStats;
