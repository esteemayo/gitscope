'use client';

import { useState } from 'react';

import ChartSection from './ChartSection';
import StatsCards from './StatsCards';
import ProfileHeader from './ProfileHeader';
import RepoLists from './repos/RepoLists';

import ProfileIntelligence from './intelligence/ProfileIntelligence';
import AnalyticsOverview from './analytics/AnalyticsOverview';
import RepositoryExplorer from './repositoryExplorer/RepositoryExplorer';

import { REPOSITORIES } from '@/data';
import { SortType, ViewType } from '@/types';
import DashboardHero from './hero/DashboardHero';
import {
  MOCK_PROFILE,
  MOCK_PROFILE_STATS,
} from '@/data/dashboard/profile.data';
import { GitHubProfile } from '@/types/dashboard';
import { MOCK_ANALYTICS } from '@/data/dashboard/analytics.data';
import { MOCK_REPOSITORIES } from '@/data/dashboard/repository.data';

const DashboardClient = ({ username }: { username: string }) => {
  const [view, setView] = useState<ViewType>('grid');
  const [sort, setSort] = useState<SortType>('stars');

  const { languages } = MOCK_ANALYTICS;

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

      <AnalyticsOverview />

      <ProfileIntelligence
        profile={MOCK_PROFILE}
        repositories={MOCK_REPOSITORIES}
        languages={languages}
        isLoading={false}
      />

      {/* <ProfileHeader username={username} /> */}

      {/* <StatsCards sort={sort} onSort={setSort} /> */}

      {/* <ChartSection /> */}

      <RepositoryExplorer repositories={MOCK_REPOSITORIES} />

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
