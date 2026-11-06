import { GitHubRepository } from '../index';

export interface StaleRepositoryCardProps extends GitHubRepository {
  className?: string;
  style?: React.CSSProperties;
}
