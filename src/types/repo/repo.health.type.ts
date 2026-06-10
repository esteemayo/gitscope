import { RepoStatusType } from './index';

export interface RepoHealthProps {
  status: RepoStatusType;
  archived: boolean;
  updatedAt: string;
  issues: number;
}
