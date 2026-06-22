import api from '@/lib/api';
import { GithubUser } from '@/types';

const endpoint = '/github/me';

export const getGithubUser = () => api.get<GithubUser>(endpoint);
