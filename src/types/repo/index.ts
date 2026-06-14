import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type RepoStatusType = 'Active' | 'Archived' | 'Inactive' | 'Disabled';

export type CommitType =
  | 'feat'
  | 'fix'
  | 'docs'
  | 'refactor'
  | 'style'
  | 'chore';

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

export interface RepoOverviewItem {
  id: string;
  label: string;
  value: string | number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}

export interface RepoHealthMetric {
  id: string;
  label: string;
  value: string;
  status?: 'success' | 'warning' | 'danger';
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface LanguageData {
  name: string;
  percentage: number;
  color: string;
}

export interface Contributor {
  id: number;
  login: string;
  avatarUrl: string;
  contributions: number;
}

export interface Commit {
  sha: string;
  message: string;
  author: string;
  authorAvatar: string;
  date: string;
  htmlUrl: string;
  type: CommitType;
}

export interface GithubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  author: {
    login: string;
    avatar_url: string;
  } | null;
  html_url: string;
}
