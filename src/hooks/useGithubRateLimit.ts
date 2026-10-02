import { useQuery } from '@tanstack/react-query';
import { getGithubRateLimit } from '@/services/github.service';

export const useGithubRateLimit = () => {
  return useQuery({
    queryKey: ['github-rate-limit'],
    queryFn: getGithubRateLimit,
  });
};
