import { LanguageDistributionItem } from '../analytics';
import { GitHubProfile, GitHubRepository } from '../index';

export interface DeveloperAwardsProps {
  profile: GitHubProfile;
  repositories: GitHubRepository[];
  languages: LanguageDistributionItem[];
  isAuthenticated: boolean;
  isLoading?: boolean;
  repositoriesComplete: boolean;
  onSignIn?(): void;
}
