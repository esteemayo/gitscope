import api from '@/lib/api';
import { GithubUser } from '@/types/profile';

const endpoint = '/github/me';

export const getGithubUser = async () => {
  const { data } = await api.get<GithubUser>(endpoint);
  return data;
};
