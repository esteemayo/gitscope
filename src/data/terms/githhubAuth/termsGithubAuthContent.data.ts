import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { GithubAuthContent } from '@/types/terms/githubAuth';

export const termsGitHubAuthenticationContent: GithubAuthContent = {
  badge: '03 · Authentication',
  title: 'GitHub Authentication',
  description:
    'GitScope uses GitHub authentication to securely connect your account and retrieve the GitHub data required to provide analytics.',
  headerIcon: GitHubLogoIcon,
  accentColor: '#F472B6',
  intro:
    "GitScope relies on GitHub's authentication infrastructure when you connect your account. By choosing to authenticate with GitHub, you authorize GitScope to request the permissions required for the features you use.",
  flowTitle: 'How authentication works',
  flowDescription:
    'The authentication process is designed to keep your GitHub credentials outside GitScope while allowing the application to access authorized GitHub data.',
  notesTitle: 'Your authentication and access',
  notesDescription:
    "GitScope does not replace GitHub's account security controls. Your GitHub credentials remain managed by GitHub.",
};
