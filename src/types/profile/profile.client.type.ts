import { GithubUser, RepositoryType } from './index';

export interface ProfileClientProps {
  user: GithubUser;
  repositories: RepositoryType[];
}
