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

export type RepositoryView = 'grid' | 'list';

export type RepositorySort = 'updated' | 'stars' | 'forks' | 'name';

export type RepositoryType = 'all' | 'original' | 'forks' | 'archived';

export type StarRange =
  | 'all'
  | '0-10'
  | '10-50'
  | '50-100'
  | '100-500'
  | '500+';

export interface AdvancedFilters {
  hasDescription: boolean;
  hastopics: boolean;
  recentlyActive: boolean;
}

export type DropdownMenu =
  | 'filters'
  | 'sort'
  | 'language'
  | 'type'
  | 'stars'
  | null;

export interface SortOptionsType {
  value: RepositorySort;
  label: string;
  description: string;
}

export interface TypeOptionsType {
  value: RepositoryType;
  label: string;
  description: string;
}

export interface StarOptionsType {
  value: StarRange;
  label: string;
  description: string;
}
