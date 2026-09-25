import type { Metadata } from 'next';
import GithubAuthenticationClient from '@/components/docs/authentication/GithubAuthenticationClient';

export const metadata: Metadata = {
  title: 'GitHub Authentication | GitScope',
  description:
    'Learn how to authenticate with GitHub and authorize access to your account.',
};

const GithubAuthenticationPage = () => {
  return <GithubAuthenticationClient />;
};

export default GithubAuthenticationPage;
