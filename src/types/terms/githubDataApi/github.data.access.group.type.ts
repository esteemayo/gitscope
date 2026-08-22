import { GitHubDataAccessGroupType } from './index';

export interface GithubDataAccessGroupProps extends GitHubDataAccessGroupType {
  groupIndex: number;
  className?: string;
  style?: React.CSSProperties;
}
