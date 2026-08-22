import {
  GitHubApiNoticeType,
  GitHubDataAccessGroupType,
  GitHubDataApiContent,
} from './index';

export interface TermsGithubDataApiProps extends GitHubDataApiContent {
  groups: GitHubDataAccessGroupType[];
  notice: GitHubApiNoticeType;
  className?: string;
  style?: React.CSSProperties;
}
