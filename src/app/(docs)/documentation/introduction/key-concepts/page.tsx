import type { Metadata } from 'next';
import KeyConceptsClient from '@/components/docs/home/KeyConceptsClient';

export const metadata: Metadata = {
  title: 'Concepts | GitScope Documenttation',
  description:
    'Learn about the key concepts behind GitScope, including its architecture, features, and how it helps developers analyze and visualize their Git repositories.',
};

const KeyConceptPage = () => {
  return <KeyConceptsClient />;
};

export default KeyConceptPage;
