import { LucideProps } from 'lucide-react';

export interface GithubUser {
  id: number;
  login: string;
  name: string;
  email: string;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  company: string | null;
  twitter_username: string | null;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
  updated_at: string;
}

export interface RepositoryType {
  id: number;
  name: string;
  description: string | null;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
}

export interface AchievementType {
  id: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}
