'use client';

import { useState } from 'react';

import ChartSection from './ChartSection';
import RepoLists from './repos/RepoLists';
import ProfileHeader from './ProfileHeader';
import StatsCards from './StatsCards';

import { REPOSITORIES } from '@/data';
import { SortType, ViewType } from '@/types';

const DashboardClient = ({ username }: { username: string }) => {
  const [view, setView] = useState<ViewType>('grid');
  const [sort, setSort] = useState<SortType>('stars');

  return (
    <div>
      <ProfileHeader username={username} />

      <StatsCards sort={sort} onSort={setSort} />

      <ChartSection />

      <RepoLists
        sort={sort}
        view={view}
        repos={REPOSITORIES}
        onSort={setSort}
        onView={setView}
      />
    </div>
  );
};

export default DashboardClient;
