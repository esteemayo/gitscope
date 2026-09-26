import { Copy, Eye, Link2, LockKeyhole, Share2 } from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const sharingAreas: DocsFeatureCardType[] = [
  {
    icon: Share2,
    title: 'Share analytics',
    description:
      'Share a GitScope profile or analytics view so another person can review the relevant information.',
    accentColor: '#8B5CF6',
  },
  {
    icon: Link2,
    title: 'Shareable context',
    description:
      'A shared link can provide context about the profile or analytics being referenced.',
    accentColor: '#06B6D4',
  },
  {
    icon: Eye,
    title: 'Review before sharing',
    description:
      'Check the information visible in the intended sharing context before sending it to someone else.',
    accentColor: '#22C55E',
  },
  {
    icon: LockKeyhole,
    title: 'Privacy awareness',
    description:
      'Consider the visibility and sensitivity of the GitHub information you are sharing.',
    accentColor: '#F97316',
  },
];

export const sharingProfiles: DocsFeatureItemType[] = [
  {
    title: 'Verify the username',
    description:
      'Confirm that the GitHub username displayed by GitScope belongs to the profile you intend to share.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Review the analytics',
    description:
      'Check the available profile, repository, language, and contribution information before sharing.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Choose the relevant context',
    description:
      'Decide whether the recipient needs the complete profile or a specific piece of analytics information.',
    accentColor: '#22C55E',
  },
];

export const sharingReferences: DocsFeatureCardType[] = [
  {
    icon: Copy,
    title: 'Copy',
    description:
      'Copy the available shareable reference so it can be used in another application or communication channel.',
    accentColor: '#8B5CF6',
  },
  {
    icon: Link2,
    title: 'Open and verify',
    description:
      'Check the reference before sending it to make sure it resolves to the intended GitScope content.',
    accentColor: '#06B6D4',
  },
];

export const sharingDevelopers: DocsFeatureItemType[] = [
  {
    title: 'Provide context',
    description:
      'Tell the recipient why you are sharing the profile and which analytics are relevant to the discussion.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Reference specific metrics',
    description:
      'Point the recipient toward the repository, language, or contribution information you want them to review.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Keep the source visible',
    description:
      'Use the GitScope profile or analytics view as the source instead of presenting individual metrics without context.',
    accentColor: '#22C55E',
  },
];

export const sharingAuthProfiles: DocsFeatureItemType[] = [
  {
    title: 'Public profile data',
    description:
      'Publicly available GitHub information can be explored through supported GitScope profile features.',
    accentColor: '#22C55E',
  },
  {
    title: 'Authenticated features',
    description:
      'Some protected analytics or sharing workflows may require an authenticated GitScope session.',
    accentColor: '#8B5CF6',
  },
];

export const sharingWorkflow: DocsFeatureItemType[] = [
  {
    title: 'Open the profile',
    description:
      'Navigate to the GitScope profile or analytics view you want to share.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Review the content',
    description:
      'Check the profile information and analytics before creating or copying a shareable reference.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Use the sharing action',
    description:
      'Use the available GitScope sharing control to create or copy the appropriate shareable reference.',
    accentColor: '#22C55E',
  },
  {
    title: 'Send the reference',
    description:
      'Share the resulting link or reference through the channel intended for your audience.',
    accentColor: '#F97316',
  },
];

export const sharingPrinciples: DocsFeatureItemType[] = [
  {
    title: 'Share the intended profile',
    description:
      'Confirm that the GitHub profile shown in the sharing view is the one you intend to send.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Check the destination',
    description:
      'Review the generated or copied reference before distributing it.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Consider the audience',
    description:
      'Think about who will receive the shared analytics and whether the information is appropriate for them.',
    accentColor: '#22C55E',
  },
  {
    title: 'Keep context intact',
    description:
      'Explain what the recipient should look at when sharing a specific metric, repository, or comparison.',
    accentColor: '#F59E0B',
  },
];
