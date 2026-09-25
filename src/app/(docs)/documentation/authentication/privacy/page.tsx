import type { Metadata } from 'next';
import PrivacyClient from '@/components/docs/authentication/PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy - Authentication | GitScope Documentation',
  description:
    'GitScope authentication privacy principles and practices for handling authenticated application state and GitHub data.',
};

const PrivacyPage = () => {
  return <PrivacyClient />;
};

export default PrivacyPage;
