import api from '@/lib/api';

export const GET = async () => {
  const { data } = await api.get('https://api.github.com/rate_limit');
  return Response.json(data);
};
