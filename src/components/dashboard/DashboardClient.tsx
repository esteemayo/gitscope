'use client';

import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import ProfileHeader from './ProfileHeader';

import DeveloperSummary from './summary/DeveloperSummary';
import DashboardHero from './hero/DashboardHero';
import AnalyticsOverview from './analytics/AnalyticsOverview';
import DeveloperAwards from './awards/DeveloperAwards';
import ProfileIntelligence from './intelligence/ProfileIntelligence';
import RepositoryHealth from './health/RepositoryHealth';
import RepositoryExplorer from './repositoryExplorer/RepositoryExplorer';

import { MOCK_PROFILE } from '@/data/dashboard/profile.data';

import { MOCK_ANALYTICS } from '@/data/dashboard/analytics.data';
import { MOCK_REPOSITORIES } from '@/data/dashboard/repository.data';

import { GitHubProfile } from '@/types/dashboard';
import { getRepositoryHealth } from '@/utils/dashboard/getRepositoryHealth';

const DashboardClient = ({ username }: { username: string }) => {
  const { data: session, status } = useSession();

  const [isLoading, setIsLoading] = useState(true);

  const { languages } = MOCK_ANALYTICS;

  const handleSave = (profile: GitHubProfile) => {
    console.log(profile);
  };

  console.log(username);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

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
        isLoading={isLoading}
      />

      <DeveloperAwards
        profile={MOCK_PROFILE}
        repositories={MOCK_REPOSITORIES}
        languages={languages}
        isAuthenticated={!!session?.user || status === 'authenticated'}
        isLoading={isLoading}
        repositoriesComplete={true}
        onSignIn={() => signIn('github')}
      />

      <RepositoryHealth
        repositories={MOCK_REPOSITORIES}
        isLoading={isLoading}
        repositoriesComplete={true}
      />

      {/* <ProfileHeader username={username} /> */}

      <DeveloperSummary
        profile={MOCK_PROFILE}
        repositories={MOCK_REPOSITORIES}
        languages={languages}
        repositoryHealth={getRepositoryHealth(MOCK_REPOSITORIES)}
        repositoriesComplete={true}
        isLoading={isLoading}
      />

      <RepositoryExplorer
        repositories={MOCK_REPOSITORIES}
        isLoading={isLoading}
      />
    </div>
  );
};

export default DashboardClient;
