export interface GitHubProfile {
  id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface ProfileStat {
  id: string;
  label: string;
  value: number;
  description: string;
  icon: 'repository' | 'star' | 'users' | 'git-fork';
}

export type RepositoryView = 'grid' | 'list';

export type RepositorySortOption =
  | 'updated'
  | 'stars'
  | 'forks'
  | 'issues'
  | 'created'
  | 'oldest'
  | 'name';

export interface RepositoryItem {
  id: number;
  name: string;
  description: string;
  language: string;
  accentColor: string;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
  archived?: boolean;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  default_branch: string;
  created_at: string;
  updated_at: string;
  pushed_at: string | null;
  fork: boolean;
  archived: boolean;
  private: boolean;
  topics: string[];
  license: {
    name: string;
    spdx_id: string | null;
  } | null;
}

export interface RepositoryFilters {
  search: string;
  language: string;
  visibility: 'all' | 'original' | 'forks';
  status: 'all' | 'active' | 'archived';
  minimumStars: number;
  hasDescription: boolean;
}

export interface RepoCardProps {
  repository: GitHubRepository;
  view: RepositoryView;
}

export interface Repository {
  id: number;
  name: string;
  htmlUrl: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  size: number;
  language: string;
  visibility: 'public' | 'private';
  created_at: string;
  updated_at: string;
}
