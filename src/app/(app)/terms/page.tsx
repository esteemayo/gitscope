import type { Metadata } from 'next';
import TermsClient from '@/components/terms/TermsClient';

export const metadata: Metadata = {
  title: 'Terms | GitScope Analytics',
  description:
    'Read GitScope Analytics terms of service to understand the rules and guidelines for using our platform, including user responsibilities and limitations.',
};

const Terms = () => {
  return <TermsClient />;
};

export default Terms;
