import { Repository } from '@/types/repository.type';

export const mostRecentRepo = (repos: Repository[]) => {
  return repos.reduce((latest, repo) => {
    return new Date(latest.updated_at) ? repo : latest;
  });
};
