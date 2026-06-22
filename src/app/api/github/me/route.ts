import axios from 'axios';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.accessToken) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { data } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });

  return Response.json(data);
};
