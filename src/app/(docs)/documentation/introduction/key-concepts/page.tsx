import type { Metadata } from 'next';
import KeyConceptsClient from '@/components/docs/KeyConceptsClient';

export const metadata: Metadata = {
  title: 'Concepts | GitScope',
};

const KeyConceptPage = () => {
  return <KeyConceptsClient />;
};

export default KeyConceptPage;
