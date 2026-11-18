import { type Metadata } from 'next';
import SessionsClient from '@/components/docs/authentication/SessionsClient';

export const metadata: Metadata = {
  title: 'Sessions - Authentication | GitScope Analytics Documentation',
  description:
    'Learn how to manage user sessions in your application, including session creation, expiration, and security best practices.',
};

const SessionsPage = () => {
  return <SessionsClient />;
};

export default SessionsPage;
