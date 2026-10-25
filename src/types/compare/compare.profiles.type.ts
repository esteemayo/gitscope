import { GitHubUserPreview } from './index';
import { Repository } from '../dashboard';

export interface CompareProfilesProps {
  userA: GitHubUserPreview;
  userB: GitHubUserPreview;
  reposA: Repository[];
  reposB: Repository[];
}
