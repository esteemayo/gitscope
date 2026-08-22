import { GitHubDataAccessItemType } from './index';

export interface GithubDataAccessItemProps extends GitHubDataAccessItemType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
