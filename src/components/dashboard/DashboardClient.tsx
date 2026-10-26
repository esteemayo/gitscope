'use client';

import { useState } from 'react';

import ChartSection from './ChartSection';
import StatsCards from './StatsCards';
import ProfileHeader from './ProfileHeader';
import RepoLists from './repos/RepoLists';
import RepositoryExplorer from './repositoryExplorer/RepositoryExplorer';

import { REPOSITORIES } from '@/data';
import { SortType, ViewType } from '@/types';
import DashboardHero from './hero/DashboardHero';
import {
  MOCK_PROFILE,
  MOCK_PROFILE_STATS,
} from '@/data/dashboard/profile.data';
import { GitHubProfile } from '@/types/dashboard';

const DashboardClient = ({ username }: { username: string }) => {
  const [view, setView] = useState<ViewType>('grid');
  const [sort, setSort] = useState<SortType>('stars');

  const handleSave = (profile: GitHubProfile) => {
    console.log(profile);
  };

  return (
    <div>
      <DashboardHero
        profile={MOCK_PROFILE}
        stats={MOCK_PROFILE_STATS}
        isSaved={false}
        onSave={handleSave}
      />

      {/* <ProfileHeader username={username} /> */}

      {/* <StatsCards sort={sort} onSort={setSort} /> */}

      <ChartSection />

      <RepositoryExplorer />

      {/* <RepoLists
        sort={sort}
        view={view}
        repos={REPOSITORIES}
        onSort={setSort}
        onView={setView}
      /> */}
    </div>
  );
};

export default DashboardClient;
