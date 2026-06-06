export interface RepoDetails {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
  default_branch: string;
  subscribers_count?: number;
  size?: number;
}
