import type { Metadata } from 'next';
import TermsClient from '@/components/terms/TermsClient';

export const metadata: Metadata = {
  title: 'Terms | GitScope',
};

const Terms = () => {
  return <TermsClient />;
};

export default Terms;
