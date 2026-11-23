import { RepositoryView } from '../index';
import { GitHubRepository } from './index';

export interface RepoCardProps {
  repository: GitHubRepository;
  view: RepositoryView;
}
