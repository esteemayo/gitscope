import { RepositoryView } from './index';
import { GitHubRepository } from '../index';

export interface RepositoryListProps {
  view: RepositoryView;
  repositories: GitHubRepository[];
  isLoading?: boolean;
  onReset(): void;
}
