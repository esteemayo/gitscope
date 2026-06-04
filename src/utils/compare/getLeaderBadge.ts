import { GitHubUserPreview, LeaderBadgeVariant } from '@/types/compare';

export const getLeaderBadge = (
  user: GitHubUserPreview,
  otherUser: GitHubUserPreview,
  activityScore: number,
  otherActivityScore: number,
): LeaderBadgeVariant[] => {
  const badges: LeaderBadgeVariant[] = [];

  if (user.followers > otherUser.followers) {
    badges.push('followers');
  }

  if (user.public_repos > otherUser.public_repos) {
    badges.push('repositories');
  }

  if (activityScore > otherActivityScore) {
    badges.push('activity');
  }

  return badges;
};
