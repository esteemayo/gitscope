import { GitHubUserPreview } from './index';
import { Repository } from '../repository.type';

export interface CompareProfileCardProps {
  user: GitHubUserPreview;
  repos: Repository[];
  label: 'User A' | 'User B';
}
