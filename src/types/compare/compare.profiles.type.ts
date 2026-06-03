import { GitHubUserPreview } from './index';
import { Repository } from '../repository.type';

export interface CompareProfilesProps {
  userA: GitHubUserPreview;
  userB: GitHubUserPreview;
  reposA: Repository[];
  reposB: Repository[];
}
