import type { Metadata } from 'next';
import PrivacyClient from '@/components/privacy/PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy | GitScope Analytics',
  description:
    'Read GitScope Analytics privacy policy to understand how we collect, use, and protect your personal information while using our platform.',
};

const Privacy = () => {
  return <PrivacyClient />;
};

export default Privacy;
