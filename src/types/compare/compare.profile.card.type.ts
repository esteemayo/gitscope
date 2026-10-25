import { Repository } from '../dashboard';
import { GitHubUserPreview, LeaderBadgeVariant } from './index';

export interface CompareProfileCardProps {
  user: GitHubUserPreview;
  repos: Repository[];
  label: 'User A' | 'User B';
  leaderBadge?: LeaderBadgeVariant[];
}
