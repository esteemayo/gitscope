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
