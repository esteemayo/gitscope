import {
  AlertCircle,
  Ban,
  CircleOff,
  LockKeyhole,
  SearchX,
  ServerCrash,
} from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const errorsAreas: DocsFeatureCardType[] = [
  {
    icon: AlertCircle,
    title: 'Invalid request',
    description:
      'The request does not satisfy the requirements expected by the API resource.',
    accentColor: '#F59E0B',
  },
  {
    icon: LockKeyhole,
    title: 'Authentication',
    description:
      'The request is missing or cannot use the authentication context required by the resource.',
    accentColor: '#8B5CF6',
  },
  {
    icon: SearchX,
    title: 'Resource',
    description:
      'The requested GitHub or GitScope resource cannot be found or accessed.',
    accentColor: '#06B6D4',
  },
  {
    icon: ServerCrash,
    title: 'Server',
    description:
      'The API encounters a problem while processing a valid request.',
    accentColor: '#EF4444',
  },
];

export const invalidRequests: DocsFeatureItemType[] = [
  {
    title: 'Missing information',
    description: 'A required value was not provided by the client.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Invalid parameter',
    description:
      'A supplied parameter does not satisfy the endpoint requirements.',
    accentColor: '#EF4444',
  },
  {
    title: 'Unsupported request',
    description:
      'The request does not match an operation supported by the endpoint.',
    accentColor: '#8B5CF6',
  },
];

export const authenticationErrors: DocsFeatureItemType[] = [
  {
    title: 'Missing authentication',
    description:
      'The request does not provide the authentication context required by the resource.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Invalid authentication',
    description: 'The provided authentication context cannot be validated.',
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
      'The authenticated context does not provide the access required by the operation.',
    accentColor: '#8B5CF6',
  },
];

export const resourcesErrors: DocsFeatureCardType[] = [
  {
    icon: SearchX,
    title: 'Not found',
    description: 'The requested resource cannot be located.',
    accentColor: '#06B6D4',
  },
  {
    icon: CircleOff,
    title: 'Unavailable',
    description:
      'The resource exists or is expected to exist, but its data is not currently available.',
    accentColor: '#F59E0B',
  },
  {
    icon: Ban,
    title: 'Restricted',
    description:
      'Access to the requested resource is not available to the current request context.',
    accentColor: '#EF4444',
  },
];

export const apiErrors: DocsFeatureItemType[] = [
  {
    title: '1. Detect the failure',
    description: 'Determine whether the API request completed successfully.',
    accentColor: '#8B5CF6',
  },
  {
    title: '2. Identify the error',
    description:
      'Inspect the available error information to determine the cause of the failure.',
    accentColor: '#06B6D4',
  },
  {
    title: '3. Choose a recovery path',
    description:
      'Decide whether the request should be corrected, retried, or surfaced to the user.',
    accentColor: '#F59E0B',
  },
  {
    title: '4. Protect sensitive details',
    description:
      'Keep credentials and internal server information out of user-facing error messages.',
    accentColor: '#EF4444',
  },
  {
    title: '5. Restore application state',
    description:
      'Return the application to a predictable state after the failed request.',
    accentColor: '#22C55E',
  },
];

export const failedRequests: DocsFeatureItemType[] = [
  {
    title: 'Temporary failures',
    description:
      'A temporary service or network condition may justify retrying a request.',
    accentColor: '#22C55E',
  },
  {
    title: 'Invalid requests',
    description: 'Correct the request before attempting it again.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Authentication failures',
    description:
      'Restore the required authentication context instead of repeatedly sending the same failed request.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Unavailable resources',
    description: 'Verify the resource and request context before retrying.',
    accentColor: '#06B6D4',
  },
];

export const errorPrinciples: DocsFeatureCardType[] = [
  {
    icon: AlertCircle,
    title: 'Handle explicitly',
    description:
      'Treat unsuccessful API requests as defined application states.',
    accentColor: '#F59E0B',
  },
  {
    icon: SearchX,
    title: 'Identify the cause',
    description:
      'Use available error information to determine the appropriate response.',
    accentColor: '#06B6D4',
  },
  {
    icon: LockKeyhole,
    title: 'Protect credentials',
    description:
      'Never expose authentication information while reporting an API failure.',
    accentColor: '#8B5CF6',
  },
  {
    icon: ServerCrash,
    title: 'Fail safely',
    description:
      'Keep the application stable when an API request cannot be completed.',
    accentColor: '#EF4444',
  },
];
