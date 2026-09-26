import type { Metadata } from 'next';
import ApiAuthenticationClient from '@/components/docs/api/ApiAuthenticationClient';

export const metadata: Metadata = {
  title: 'API Authentication | GitScope Documentation',
  description:
    'Learn how authentication works in the GitScope API, including how to obtain and use access tokens for secure API requests.',
};

const ApiAuthenticationPage = () => {
  return <ApiAuthenticationClient />;
};

export default ApiAuthenticationPage;
