import { GitHubRepository } from '../index';

export interface RepositoryFooterProps {
  repositories: GitHubRepository[];
  className?: string;
  style?: React.CSSProperties;
}
