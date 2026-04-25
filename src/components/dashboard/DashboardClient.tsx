'use client';

import { useState } from 'react';

import ChartSection from './ChartSection';
import RepoList from './RepoList';
import ProfileHeader from './ProfileHeader';
import StatsCards from './StatsCards';
import DashboardControls from './DashboardControls';

import { SortType, ViewType } from '@/types';

const DashboardClient = () => {
  const [view, setView] = useState<ViewType>('grid');
  const [sort, setSort] = useState<SortType>('stars');

  return (
    <div>
      <ProfileHeader />
      <StatsCards />
      <ChartSection />

      <DashboardControls
        sort={sort}
        view={view}
        onSort={setSort}
        onView={setView}
      />

      <RepoList view={view} />
    </div>
  );
};

export default DashboardClient;
