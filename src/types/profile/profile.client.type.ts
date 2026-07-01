import { Language } from './language';
import { GithubUser, RepositoryType } from './index';

export interface ProfileClientProps {
  user: GithubUser;
  languages: Language[];
  repositories: RepositoryType[];
}
