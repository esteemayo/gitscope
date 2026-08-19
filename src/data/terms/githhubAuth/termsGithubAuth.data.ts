import {
  CheckCircle2,
  KeyRound,
  LockKeyhole,
  LogIn,
  ShieldCheck,
  Unplug,
  UserCheck,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import {
  GithubAuthNoteData,
  GithubAuthStepData,
} from '@/types/terms/githubAuth';

export const termsGitHubAuthenticationSteps: GithubAuthStepData[] = [
  {
    id: 'connect',
    title: 'Connect GitHub',
    description:
      'You choose to connect your GitHub account from within GitScope.',
    icon: GitHubLogoIcon,
    accentColor: '#A78BFA',
  },

  {
    id: 'authorize',
    title: 'Review authorization',
    description:
      'GitHub presents the permissions requested by GitScope before you approve access.',
    icon: ShieldCheck,
    accentColor: '#60A5FA',
  },

  {
    id: 'authenticate',
    title: 'Authenticate',
    description:
      'GitHub verifies your identity and returns an authorization result to GitScope.',
    icon: UserCheck,
    accentColor: '#34D399',
  },

  {
    id: 'access',
    title: 'Access analytics',
    description:
      'GitScope uses the authorized connection to retrieve supported GitHub data and generate analytics.',
    icon: CheckCircle2,
    accentColor: '#F59E0B',
  },
];

export const termsGitHubAuthenticationNotes: GithubAuthNoteData[] = [
  {
    id: 'credentials',
    title: 'Credentials stay with GitHub',
    description:
      'GitScope does not require you to provide your GitHub password directly to the application.',
    icon: LockKeyhole,
    accentColor: '#60A5FA',
  },

  {
    id: 'authorization',
    title: 'Authorization is permission-based',
    description:
      'GitScope only requests the GitHub permissions required to provide its supported functionality.',
    icon: KeyRound,
    accentColor: '#A78BFA',
  },

  {
    id: 'revocation',
    title: 'You control access',
    description:
      "You can manage or revoke GitScope's authorization through the relevant GitHub account settings.",
    icon: Unplug,
    accentColor: '#F472B6',
  },

  {
    id: 'session',
    title: 'Authentication protects your session',
    description:
      'GitScope uses the authentication result to establish your application session rather than asking for your GitHub password.',
    icon: LogIn,
    accentColor: '#34D399',
  },
];
