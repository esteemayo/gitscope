export type LeaderBadgeVariant = 'repositories' | 'followers' | 'activity';

export type GitHubUserPreview = {
  login: string;
  avatar_url?: string;
  name: string | null;
  location?: string;
  company?: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};
