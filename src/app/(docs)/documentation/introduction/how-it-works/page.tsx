import type { Metadata } from 'next';
import HowGitScopeWorksClient from '@/components/docs/home/HowGitScopeWorksClient';

export const metadata: Metadata = {
  title: 'How GitScope Works | GitScope Documenttation',
  description:
    'Discover how GitScope works, including its architecture, features, and the process it uses to analyze and visualize Git repositories for developers.',
};

const HowGitScopeWorksPage = () => {
  return <HowGitScopeWorksClient />;
};

export default HowGitScopeWorksPage;
