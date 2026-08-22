import type { LucideIcon } from 'lucide-react';

export interface GitHubDataApiContent {
  badge: string;
  title: string;
  description: string;
  headerIcon: LucideIcon | React.ComponentType;
  intro: string;
  accentColor: string;
}

export interface GitHubDataAccessItemType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface GitHubDataAccessGroupType {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  items: GitHubDataAccessItemType[];
}

export interface GitHubApiNoticeType {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
