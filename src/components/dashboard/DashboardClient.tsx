'use client';

import { useState } from 'react';

import ProfileHeader from './ProfileHeader';
import RepoList from './RepoList';
import DashboardControls from './DashboardControls';

import { sortType, ViewType } from '@/types';

const DashboardClient = () => {
  const [view, setView] = useState<ViewType>('grid');
  const [sort, setSort] = useState<sortType>('stars');

  return (
    <div>
      <ProfileHeader />

      <DashboardControls
        sort={sort}
        view={view}
        onSort={setSort}
        onView={setView}
      />

      <RepoList />
    </div>
  );
};

export default DashboardClient;
