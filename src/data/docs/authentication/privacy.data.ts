import {
  Database,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const authenticationPrivacy: DocsFeatureCardType[] = [
  {
    icon: ShieldCheck,
    title: 'Controlled access',
    description:
      'Authenticated functionality should operate within the permissions granted during GitHub authorization.',
    accentColor: '#8B5CF6',
  },
  {
    icon: EyeOff,
    title: 'Privacy-aware processing',
    description:
      'Authentication-related information should only be processed for relevant application functionality.',
    accentColor: '#22C55E',
  },
];

export const privacyAreas: DocsFeatureCardType[] = [
  {
    icon: GitHubLogoIcon,
    title: 'GitHub authentication',
    description:
      'GitScope uses GitHub authentication when you access features that require an authenticated account.',
    accentColor: '#8B5CF6',
  },
  {
    icon: UserRound,
    title: 'Account information',
    description:
      'Authenticated features may use information associated with your GitHub account to identify your profile.',
    accentColor: '#06B6D4',
  },
  {
    icon: Database,
    title: 'Analytics data',
    description:
      'GitScope processes GitHub data to provide profile, repository, language, contribution, and comparison analytics.',
    accentColor: '#22C55E',
  },
  {
    icon: LockKeyhole,
    title: 'Authentication state',
    description:
      'Session information allows GitScope to maintain your authenticated state while you use protected features.',
    accentColor: '#F97316',
  },
];

export const privacyPrinciples: DocsFeatureItemType[] = [
  {
    title: 'Purpose limitation',
    description:
      'Authentication and GitHub data should be used to provide the GitScope features for which access was granted.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Access control',
    description:
      'Protected features should only be available when the required authentication state and permissions are present.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Data minimization',
    description:
      'Only information necessary for the relevant application functionality should be processed.',
    accentColor: '#22C55E',
  },
  {
    title: 'User awareness',
    description:
      'Users should be able to understand what authentication enables and how GitScope handles related data.',
    accentColor: '#f59E0B',
  },
];

export const authenticationData: DocsFeatureItemType[] = [
  {
    title: 'GitHub profile information',
    description:
      'Information exposed by GitHub may be used to identify the authenticated account and provide profile-related features.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Repository information',
    description:
      'Repository data can be processed to generate repository-level analytics and insights.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Contribution information',
    description:
      'Contribution activity can be used to generate contribution analytics and activity visualizations.',
    accentColor: '#22C55E',
  },
  {
    title: 'Session information',
    description:
      'Authentication state is used to determine whether protected GitScope features are available.',
    accentColor: '#F97316',
  },
];

export const privacyPermissions: DocsFeatureItemType[] = [
  {
    title: 'Review requested access',
    description:
      'Check the permissions presented during GitHub authorization before approving access.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Understand feature requirements',
    description:
      'Some GitScope functionality may require authentication or specific access to GitHub data.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Revoke access when necessary',
    description:
      'You can manage authorized application access through your GitHub account settings.',
    accentColor: '#EF4444',
  },
];
