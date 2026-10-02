import api from '@/lib/api';

export const GET = async () => {
  const { data, status } = await api.get('https://api.github.com/rate_limit');

  if (status !== 200) {
    throw new Error('Failed to fetch GitHub rate limit');
  }

  return Response.json(data);
};
