import type { Metadata } from 'next';
import ContributionsClient from '@/components/docs/ContributionsClient';

export const metadata: Metadata = {
  title: 'Contributions  | GitScope Documentation',
  description:
    'Learn about the contributions feature in Gitscope, which provides insights into your development activity and helps you understand your coding patterns.',
};

const ContributionPage = () => {
  return <ContributionsClient />;
};

export default ContributionPage;
