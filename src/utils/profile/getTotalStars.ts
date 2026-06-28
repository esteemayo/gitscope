import { RepositoryType } from '@/types/profile';

export const getTotalStars = (repositories: RepositoryType[]) => {
  return repositories.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};
