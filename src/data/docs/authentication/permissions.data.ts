import {
  Database,
  Eye,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react';
import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const authenticationPermissions: DocsFeatureCardType[] = [
  {
    icon: UserRoundCheck,
    title: 'Authentication',
    description:
      'Establishes the identity of the GitHub account completing the sign-in flow.',
    accentColor: '#6366F1',
  },
  {
    icon: KeyRound,
    title: 'Permissions',
    description:
      'Define the access available to the authenticated GitScope experience.',
    accentColor: '#14B8A6',
  },
  {
    icon: ShieldCheck,
    title: 'Authorization',
    description:
      'Represents the approval that allows GitScope to use the requested GitHub access.',
    accentColor: '#8B5CF6',
  },
];

export const permissionScopes: DocsFeatureItemType[] = [
  {
    title: 'Requested access',
    description:
      'The authorization flow communicates the access GitScope requests from GitHub.',
    accentColor: '#6366F1',
  },
  {
    title: 'Granted access',
    description:
      'The resulting permissions depend on the authorization completed through GitHub.',
    accentColor: '#14B8A6',
  },
  {
    title: 'Feature access',
    description:
      'Authenticated GitScope features operate within the access available to the application.',
    accentColor: '#8B5CF6',
  },
];

export const permissionDataAccess: DocsFeatureCardType[] = [
  {
    icon: Database,
    title: 'GitHub data',
    description:
      'Authenticated features can work with the GitHub data available within the authorized access scope.',
    accentColor: '#06B6D4',
  },
  {
    icon: Eye,
    title: 'Profile context',
    description:
      'The authenticated experience can use account information needed to represent the connected profile.',
    accentColor: '#EC4899',
  },
  {
    icon: LockKeyhole,
    title: 'Access boundaries',
    description:
      'Permission scope establishes boundaries around what authenticated functionality can access.',
    accentColor: '#F59E0B',
  },
];

export const permissionChanges: DocsFeatureItemType[] = [
  {
    title: 'New access requirement',
    description:
      'A feature may require access that was not part of the previous authorization.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Reauthorization',
    description:
      'GitHub may require the account to authorize updated access before the feature can be used.',
    accentColor: '#6366F1',
  },
  {
    title: 'Updated session',
    description:
      'Once authorization is completed, the authenticated experience can use the newly available access.',
    accentColor: '#14B8A6',
  },
];

export const leastPrivilegeAccess: DocsFeatureItemType[] = [
  {
    title: 'Limit access',
    description:
      'Access should remain limited to the capabilities required by the application.',
    accentColor: '#14B8A6',
  },
  {
    title: 'Review requests',
    description:
      'Review the permissions presented during authorization before approving access.',
    accentColor: '#6366F1',
  },
  {
    title: 'Revoke when necessary',
    description:
      'Remove application access through GitHub when you no longer want the authorization to remain active.',
    accentColor: '#EF4444',
  },
];
