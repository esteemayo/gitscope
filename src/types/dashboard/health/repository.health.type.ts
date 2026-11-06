import { GitHubRepository } from '../index';

export interface RepositoryHealthProps {
  repositories: GitHubRepository[];
  isLoading?: boolean;
  repositoriesComplete: boolean;
}
