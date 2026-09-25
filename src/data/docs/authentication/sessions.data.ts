import {
  LogIn,
  LogOut,
  ShieldCheck,
  TimerReset,
  UserCheck,
} from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const sessionCards: DocsFeatureCardType[] = [
  {
    icon: UserCheck,
    title: 'Authenticated identity',
    description:
      'The session allows GitScope to associate the current authenticated state with your GitHub account.',
    accentColor: '#8B5CF6',
  },
  {
    icon: ShieldCheck,
    title: 'Protected access',
    description:
      'Protected features can check the session before allowing authenticated functionality.',
    accentColor: '#06B6D4',
  },
];

export const sessionStages: DocsFeatureCardType[] = [
  {
    icon: LogIn,
    title: 'Sign in',
    description:
      'You authenticate with GitHub and grant GitScope the permissions required for authenticated features.',
    accentColor: '#8B5CF6',
  },
  {
    icon: UserCheck,
    title: 'Session created',
    description:
      'GitScope establishes an authenticated session that allows the application to recognize your signed-in state.',
    accentColor: '#06B6D4',
  },
  {
    icon: ShieldCheck,
    title: 'Authenticated access',
    description:
      'Protected GitScope features can use the authenticated session to determine whether access is available.',
    accentColor: '#22C55E',
  },
  {
    icon: LogOut,
    title: 'Sign out',
    description:
      'Signing out ends the authenticated state and prevents the current session from being used for protected access.',
    accentColor: '#F97316',
  },
];

export const sessionStates: DocsFeatureItemType[] = [
  {
    title: 'Unauthenticated',
    description:
      'No active authenticated session is available. Public GitScope features remain available where supported.',
    accentColor: '#64748B',
  },
  {
    title: 'Authenticated',
    description:
      'A valid session is available and protected features can recognize the signed-in user.',
    accentColor: '#22C55E',
  },
  {
    title: 'Expired or invalid',
    description:
      'The session can no longer be used. GitScope may require you to authenticate again before protected features become available.',
    accentColor: '#F59E0B',
  },
];

export const sessionSignOut: DocsFeatureItemType[] = [
  {
    title: 'End the current session',
    description:
      'Sign out to stop using the current authenticated application state.',
    accentColor: '#F97316',
  },
  {
    title: 'Protect shared devices',
    description:
      'Always sign out when using a computer or device that other people can access.',
    accentColor: '#EF4444',
  },
];

export const invalidSessions: DocsFeatureCardType[] = [
  {
    icon: TimerReset,
    title: 'Session expired',
    description:
      'The current session is no longer valid and authentication may be required again.',
    accentColor: '#F59E0B',
  },
  {
    icon: LogIn,
    title: 'Authenticate again',
    description:
      'A new authentication flow can restore access to protected features when required.',
    accentColor: '#8B5CF6',
  },
];

export const securityPrinciples: DocsFeatureItemType[] = [
  {
    title: 'Session validation',
    description:
      'Protected application areas should verify the current authentication state instead of assuming that a previous login is still valid.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Minimal session data',
    description:
      'A session should contain only the information required to maintain authenticated application state.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Explicit sign out',
    description:
      'Signing out provides a clear way to end the current authenticated state, especially on shared or public devices.',
    accentColor: '#F97316',
  },
];
