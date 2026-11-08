'use client';

import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import ChartSection from './ChartSection';
import StatsCards from './StatsCards';
import ProfileHeader from './ProfileHeader';
import RepoLists from './repos/RepoLists';

import AnalyticsOverview from './analytics/AnalyticsOverview';
import DashboardHero from './hero/DashboardHero';
import ProfileIntelligence from './intelligence/ProfileIntelligence';
import DeveloperAwards from './awards/DeveloperAwards';
import RepositoryExplorer from './repositoryExplorer/RepositoryExplorer';
import RepositoryHealth from './health/RepositoryHealth';

import { REPOSITORIES } from '@/data';
import { SortType, ViewType } from '@/types';
import {
  MOCK_PROFILE,
  MOCK_PROFILE_STATS,
} from '@/data/dashboard/profile.data';

import { MOCK_ANALYTICS } from '@/data/dashboard/analytics.data';
import { GitHubProfile } from '@/types/dashboard';
import { MOCK_REPOSITORIES } from '@/data/dashboard/repository.data';

const DashboardClient = ({ username }: { username: string }) => {
  const { data: session, status } = useSession();

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

      <DeveloperAwards
        profile={MOCK_PROFILE}
        repositories={MOCK_REPOSITORIES}
        languages={languages}
        isAuthenticated={!!session?.user || status === 'authenticated'}
        isLoading={false}
        repositoriesComplete={true}
        onSignIn={() => signIn('github')}
      />

      <RepositoryHealth
        repositories={MOCK_REPOSITORIES}
        isLoading={false}
        repositoriesComplete={true}
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
