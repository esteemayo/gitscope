import { RepoStatusType } from './index';

export interface RepoStatusProps {
  status: RepoStatusType;
  lastCommitDate: string;
}
