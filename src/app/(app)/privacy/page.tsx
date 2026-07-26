import type { Metadata } from 'next';
import PrivacyClient from '@/components/privacy/PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy | GitScope',
};

const Privacy = () => {
  return <PrivacyClient />;
};

export default Privacy;
