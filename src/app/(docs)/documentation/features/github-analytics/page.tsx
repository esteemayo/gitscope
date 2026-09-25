import type { Metadata } from 'next';
import GitHubAnalyticsClient from '@/components/docs/GithubAnalyticsClient';

export const metadata: Metadata = {
  title: 'GitHub Analytics | GitScope Documentation',
  description:
    'GitHub Analytics is a feature of GitScope that allows you to analyze your GitHub repositories and visualize the data in a meaningful way.',
};

const GitHubAnalyticsPage = () => {
  return <GitHubAnalyticsClient />;
};

export default GitHubAnalyticsPage;
