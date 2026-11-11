import { LanguageDistributionItem } from '../analytics';
import { RepositoryHealthData } from '../health';
import { GitHubProfile, GitHubRepository } from '../index';

export interface DeveloperSummaryProps {
  profile: GitHubProfile;
  repositories: GitHubRepository[];
  languages: LanguageDistributionItem[];
  repositoryHealth: RepositoryHealthData;
  repositoriesComplete: boolean;
  isLoading?: boolean;
}
