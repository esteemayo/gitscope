import { RepoStatusType } from './index';

export interface RepoSidebarProps {
  githubUrl: string;
  stars: number;
  forks: number;
  issues: number;
  language: string | null;
  createdAt: string;
  updatedAt: string;
  branch: string;
  status: RepoStatusType;
}
