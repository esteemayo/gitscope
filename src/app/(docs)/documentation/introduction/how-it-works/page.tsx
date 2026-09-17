import type { Metadata } from 'next';
import HowGitScopeWorksClient from '@/components/docs/HowGitScopeWorksClient';

export const metadata: Metadata = {
  title: 'How GitScope Works | GitScope',
};

const HowGitScopeWorksPage = () => {
  return <HowGitScopeWorksClient />;
};

export default HowGitScopeWorksPage;
