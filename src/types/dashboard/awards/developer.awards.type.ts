import { GitHubProfile, GitHubRepository } from '../index';

export interface DeveloperAwardsProps {
  profile: GitHubProfile;
  repositories: GitHubRepository[];
  isAuthenticated: boolean;
  isLoading?: boolean;
  repositoriesComplete: boolean;
  onSignIn?(): void;
}
