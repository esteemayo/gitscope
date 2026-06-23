import { useQuery } from '@tanstack/react-query';
import { getGithubUser } from '@/services/github.service';

export const useGithubUser = () => {
  return useQuery({
    queryKey: ['github-user'],
    queryFn: getGithubUser,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: 1,
  });
};
