import { KeyRound, LockKeyhole, ShieldCheck, UserCheck } from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const authenticationContexts: DocsFeatureCardType[] = [
  {
    icon: UserCheck,
    title: 'Authentication',
    description:
      'Establishes the identity or authenticated session associated with an API request.',
    accentColor: '#8B5CF6',
  },
  {
    icon: ShieldCheck,
    title: 'Authorization',
    description:
      'Determines whether the authenticated context can access a particular resource or operation.',
    accentColor: '#22C55E',
  },
];

export const authenticationRequests: DocsFeatureItemType[] = [
  {
    title: 'Public resources',
    description:
      'Resources intended for public access can be requested without an authenticated session when supported.',
    accentColor: '#22C55E',
  },
  {
    title: 'Protected resources',
    description:
      'Resources containing authenticated functionality require the appropriate authentication context.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'User-specific operations',
    description:
      'Operations associated with an authenticated user require GitScope to identify the requesting session.',
    accentColor: '#06B6D4',
  },
];

export const authenticationFlows: DocsFeatureItemType[] = [
  {
    title: '1. Authenticate',
    description:
      'The user establishes an authenticated session through the supported GitHub authentication flow.',
    accentColor: '#8B5CF6',
  },
  {
    title: '2. Establish session',
    description:
      'GitScope maintains the authenticated context needed for protected application functionality.',
    accentColor: '#06B6D4',
  },
  {
    title: '3. Make the request',
    description:
      'The application sends an API request within the appropriate authenticated context.',
    accentColor: '#22C55E',
  },
  {
    title: '4. Validate access',
    description:
      'The API verifies that the request has the authentication context required by the resource.',
    accentColor: '#F59E0B',
  },
  {
    title: '5. Return the result',
    description:
      'The API returns the requested data when the request satisfies the resource requirements.',
    accentColor: '#14B8A6',
  },
];

export const apiRequests: DocsFeatureCardType[] = [
  {
    icon: LockKeyhole,
    title: 'Protected context',
    description:
      'Protected resources should only be processed when the required authenticated context is available.',
    accentColor: '#EF4444',
  },
  {
    icon: KeyRound,
    title: 'Request credentials',
    description:
      'Authentication information must be supplied through the mechanism expected by the API.',
    accentColor: '#F59E0B',
  },
];

export const authenticationFailures: DocsFeatureItemType[] = [
  {
    title: 'Missing authentication',
    description:
      'The request does not provide the authentication context required by the resource.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Invalid authentication',
    description: 'The supplied authentication context cannot be validated.',
    accentColor: '#EF4444',
  },
  {
    title: 'Expired session',
    description: 'The authenticated session is no longer available or valid.',
    accentColor: '#F97316',
  },
  {
    title: 'Insufficient access',
    description:
      'The authenticated context does not provide the access required for the requested operation.',
    accentColor: '#8B5CF6',
  },
];
