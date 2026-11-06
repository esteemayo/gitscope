import { GitHubRepository } from '../index';

type HealthMetricIcon = 'activity' | 'clock' | 'scale';

export interface RepositoryHealthMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: HealthMetricIcon;
  accentColor: string;
}

export interface RepositoryHealthData {
  totalRepositories: number;
  recentlyMaintained: number;
  staleRepositories: number;
  licenseCoverage: number | null;
  staleRepositoryList: GitHubRepository[];
  metrics: RepositoryHealthMetric[];
}
