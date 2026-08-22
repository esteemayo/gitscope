import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { GitHubDataApiContent } from '@/types/terms/githubDataApi';

export const githubDataContent: GitHubDataApiContent = {
  badge: '06 - GitHub Data',
  title: 'GitHub Data & API Usage.',
  description:
    'GitScope uses GitHub data and GitHub APIs to provide repository analytics, profile insights, and other features available through the application.',
  headerIcon: GitHubLogoIcon,
  intro:
    'When you connect GitHub to GitScope, the application retrieves information permitted through the authorized GitHub connection. The data is processed to provide analytics and features within GitScope rather than to replace or modify the underlying GitHub service.',
  accentColor: '#EF4444',
};
