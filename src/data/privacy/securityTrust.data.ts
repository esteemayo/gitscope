import { SecurityTrustItem } from '@/types/privacy/dataStorageSecurity';

export const securityTrustItems: SecurityTrustItem[] = [
  {
    id: 'password',
    label: 'GitScope never stores your GitHub password.',
  },
  {
    id: 'readonly',
    label: 'Repository access is strictly read-only',
  },
  {
    id: 'optional-auth',
    label: 'Authentication is only required for pesonalized features.',
  },
  {
    id: 'public',
    label: 'Public repository analytics remain available without signing in.',
  },
];
