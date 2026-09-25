import { KeyRound, LockKeyhole, ShieldCheck, UserRound } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const authenticationCards: DocsFeatureCardType[] = [
  {
    icon: UserRound,
    title: 'Authenticated profile',
    description: 'Access your own authenticated GitScope profile experience.',
    accentColor: '#6366F1',
  },
  {
    icon: GitHubLogoIcon,
    title: 'GitHub account',
    description:
      'Connect GitScope to the GitHub account used during authentication.',
    accentColor: '#14B8A6',
  },
  {
    icon: ShieldCheck,
    title: 'Protected features',
    description: 'Use features that require an authenticated session.',
    accentColor: '#8B5CF6',
  },
  {
    icon: LockKeyhole,
    title: 'Scoped access',
    description:
      'Authentication provides access within the permissions granted to the application.',
    accentColor: '#F59E0B',
  },
];

export const authenticationSignin: DocsFeatureItemType[] = [
  {
    title: 'Start authentication',
    description:
      'Choose the GitHub sign-in option from the GitScope authentication interface.',
    accentColor: '#6366F1',
  },
  {
    title: 'Review authorization',
    description:
      'GitHub presents the access requested by the application before authorization is completed.',
    accentColor: '#14B8A6',
  },
  {
    title: 'Return to GitScope',
    description:
      'After successful authentication, GitHub redirects the flow back to GitScope.',
    accentColor: '#8B5CF6',
  },
];

export const authenticationFlow: DocsFeatureItemType[] = [
  {
    title: '1. GitScope',
    description: 'You initiate authentication from the GitScope application.',
    accentColor: '#6366F1',
  },
  {
    title: '2. GitHub',
    description:
      'GitHub handles account authentication and presents the authorization request.',
    accentColor: '#24292F',
  },
  {
    title: '3. Authorization',
    description: 'You review and approve the requested access.',
    accentColor: '#F59E0B',
  },
  {
    title: '4. GitScope',
    description:
      'The authenticated session becomes available after the flow completes successfully.',
    accentColor: '#14B8A6',
  },
];

export const authenticatedFeatures: DocsFeatureCardType[] = [
  {
    icon: UserRound,
    title: 'Your profile',
    description:
      'View the authenticated profile experience associated with your GitHub account.',
    accentColor: '#6366F1',
  },
  {
    icon: KeyRound,
    title: 'Compare Developers',
    description:
      'Use authenticated comparison functionality where authentication is required.',
    accentColor: '#EC4899',
  },
  {
    icon: GitHubLogoIcon,
    title: 'Repository details',
    description:
      'Access repository experiences that require an authenticated session.',
    accentColor: '#14B8A6',
  },
];

export const authenticationErrors: DocsFeatureItemType[] = [
  {
    title: 'Authorization cancelled',
    description:
      'The authentication flow was stopped before authorization was completed.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Authentication failure',
    description:
      'GitScope could not establish the expected authenticated session.',
    accentColor: '#EF4444',
  },
  {
    title: 'Session issue',
    description:
      'An existing session may no longer be valid and may require authentication again.',
    accentColor: '#8B5CF6',
  },
];
