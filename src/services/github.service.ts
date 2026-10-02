import api from '@/lib/api';
import { GithubUser, RateLimitType } from '@/types/profile';

const endpoint = '/github';

export const getGithubUser = async () => {
  const { data } = await api.get<GithubUser>(`${endpoint}/me`);
  return data;
};

export const getGithubRateLimit = async () => {
  const { data } = await api.get<RateLimitType>(`${endpoint}/rate-limit`);
  return data;
};
