import { GitHubApiNoticeType } from './index';

export interface GithubDataApiNoticeProps extends GitHubApiNoticeType {
  className?: string;
  style?: React.CSSProperties;
}
