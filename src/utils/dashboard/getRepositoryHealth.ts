import { formatNumber } from '../formatNumber';

import { GitHubRepository } from '@/types/dashboard';
import {
  RepositoryHealthData,
  RepositoryHealthMetric,
} from '@/types/dashboard/health';

const RECENTLY_MAINTAINED_DAYS = 90;
const STALE_REPOSITORY_DAYS = 180;

const DAYS_IN_MS = 24 * 60 * 60 * 1000;

const getDaysSinceUpdate = (updatedAt: string): number => {
  const currentDate = Date.now();
  const timestamp = new Date(updatedAt).getTime();

  if (Number.isNaN(timestamp)) {
    return Infinity;
  }

  return Math.floor((currentDate - timestamp) / DAYS_IN_MS);
};

const isArchivedRepository = (repository: GitHubRepository): boolean => {
  return repository.archived;
};

const isRecentlyMaintained = (repository: GitHubRepository): boolean => {
  return getDaysSinceUpdate(repository.updated_at) <= RECENTLY_MAINTAINED_DAYS;
};

const isStaleRepository = (repository: GitHubRepository): boolean => {
  return getDaysSinceUpdate(repository.updated_at) >= STALE_REPOSITORY_DAYS;
};

const getLicenseCoverage = (
  repositories: GitHubRepository[],
): number | null => {
  if (repositories.length === 0) {
    return null;
  }

  const licensedRepositories = repositories.filter(
    (repository) => repository.license !== null,
  ).length;

  return Math.floor((licensedRepositories / repositories.length) * 100);
};

const createHealthMetrics = (
  recentlyMaintained: number,
  staleRepositories: number,
  licenseCoverage: number | null,
): RepositoryHealthMetric[] => {
  return [
    {
      id: 'recently-maintained',
      label: 'Recently maintained',
      value: formatNumber(recentlyMaintained),
      description: 'Updated within 90 days',
      icon: 'activity',
      accentColor: '#10B981',
    },
    {
      id: 'stale-repositories',
      label: 'Stale repositories',
      value: formatNumber(staleRepositories),
      description: 'No updates in 180+ days',
      icon: 'clock',
      accentColor: '#F59E0B',
    },
    {
      id: 'license-coverage',
      label: 'License coverage',
      value: licenseCoverage === null ? 'N/A' : `${licenseCoverage}%`,
      description: 'Repositories with a license',
      icon: 'scale',
      accentColor: '#8B5CF6',
    },
  ];
};

export const getRepositoryHealth = (
  repositories: GitHubRepository[],
): RepositoryHealthData => {
  const activeRepositories = repositories.filter(
    (repository) => !isArchivedRepository(repository),
  );

  const recentlyMaintained = activeRepositories.filter((repository) =>
    isRecentlyMaintained(repository),
  ).length;

  const staleRepositoryList = repositories
    .filter((repository) => isStaleRepository(repository))
    .sort(
      (a, b) =>
        new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime(),
    );

  const staleRepositories = staleRepositoryList.length;

  const licenseCoverage = getLicenseCoverage(repositories);

  return {
    totalRepositories: repositories.length,
    recentlyMaintained,
    staleRepositories,
    licenseCoverage,
    staleRepositoryList,
    metrics: createHealthMetrics(
      recentlyMaintained,
      staleRepositories,
      licenseCoverage,
    ),
  };
};
