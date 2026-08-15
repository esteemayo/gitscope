import {
  Database,
  Eye,
  Fingerprint,
  LockKeyhole,
  Server,
  ShieldCheck,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import {
  SecurityFeature,
  SecurityLayerItem,
  SecurityOutcome,
  SecurityOverviewItem,
  SecurityTrustItem,
  TrustBanner,
} from '@/types/privacy/dataStorageSecurity';

export const securityOverview: SecurityOverviewItem[] = [
  {
    id: 'oauth',
    title: 'GitHub OAuth',
    description:
      'Authentication is handled securely through GitHub. GitScope never receives or stores your GitHub password.',
    icon: GitHubLogoIcon,
    accentColor: '#4F46E5',
  },
  {
    id: 'encryption',
    title: 'Encrypted Communication',
    description:
      'Every request between your browser, GitScope, and GitHub is transmitted using HTTPS encryption.',
    icon: LockKeyhole,
    accentColor: '#0EA5E9',
  },
  {
    id: 'privacy',
    title: 'Privacy First',
    description:
      'Authentication is optional for public analytics. Additional permissions are only requested when you choose to unlock personalized features.',
    icon: ShieldCheck,
    accentColor: '#22C55E',
  },
];

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

export const securityFeatures: SecurityFeature[] = [
  {
    id: 'encryption',
    title: 'HTTPS Encryption',
    description:
      'Data exchanged between your browser, GitScope, and GitHub is protected using encrypted HTTS connections.',
    icon: LockKeyhole,
    accentColor: '#4F46E5',
    category: 'Encryption',
    highlightsTitle: 'Protected By',
    highlights: [
      {
        id: 'tls',
        label: 'Encrypted API requests',
      },
      {
        id: 'transport',
        label: 'Secure data transmission',
      },
      {
        id: 'integrity',
        label: 'Protected communication',
      },
    ],
    summary: {
      title: 'End-to-end Encryption',
      description:
        'Information exchanged between your browser, GitScope, and GitHub is transmitted over encrypted HTTPS connections.',
    },
  },
  {
    id: 'authentication',
    title: 'Secure Authentication',
    description:
      'GitScope uses GitHub OAuth for authentication and never stores your GitHub credentials.',
    icon: ShieldCheck,
    accentColor: '#0EA5E9',
    category: 'Authentication',
    highlightsTitle: 'Authentication Includes',
    highlights: [
      {
        id: 'oauth',
        label: 'GitHub OAuth',
      },
      {
        id: 'password',
        label: 'No password storage',
      },
      {
        id: 'signin',
        label: 'Authentication only when needed',
      },
    ],
    summary: {
      title: 'OAuth Authentication',
      description:
        'GitHub securely authenticates your account without exposing your password to GitScope.',
    },
  },
  {
    id: 'readonly',
    title: 'Read-only Repository Access',
    description:
      'Repository information is accessed only to generate analytics and visualizations.',
    icon: Eye,
    accentColor: '#22C55E',
    category: 'Repository Access',
    highlightsTitle: 'Access Limited To',
    highlights: [
      {
        id: 'push',
        label: 'No repository modifications',
      },
      {
        id: 'delete',
        label: 'No deletion requests',
      },
      {
        id: 'write',
        label: 'No write permissions',
      },
    ],
    summary: {
      title: 'Read-only Access',
      description:
        'GitScope analyzes repository information without requesting permission to modify your repositories.',
    },
  },
  {
    id: 'storage',
    title: 'Local Data Storage',
    description:
      'Some preferences and cached analytics may be stored locally in your browser to improve performance and user experience.',
    icon: Database,
    accentColor: '#F59E0B',
    category: 'Browser Storage',
    highlightsTitle: 'Stored Locally',
    highlights: [
      {
        id: 'theme',
        label: 'Theme preference may be stored locally',
      },
      {
        id: 'recent',
        label: 'Recent searches may be stored locally',
      },
      {
        id: 'cache',
        label: 'Analytics may be cached locally where appropriate',
      },
    ],
    summary: {
      title: 'Browser Storage',
      description:
        'Only preferences and cached data that improve your experience may be stored locally where applicable.',
    },
  },
  {
    id: 'monitoring',
    title: 'Platform Protection',
    description:
      'Operational monitoring helps maintain reliability, performance, and security across the application.',
    icon: Server,
    accentColor: '#EC4899',
    category: 'Infrastructure',
    highlightsTitle: 'Security Measures',
    highlights: [
      {
        id: 'errors',
        label: 'Error monitoring',
      },
      {
        id: 'performance',
        label: 'Performance tracking',
      },
      {
        id: 'abuse',
        label: 'Abuse prevention',
      },
    ],
    summary: {
      title: 'Operational Monitoring',
      description:
        'Security monitoring helps detect issues, maintain reliability, and protect the platform.',
    },
  },
];

export const securityLayers: SecurityLayerItem[] = [
  {
    id: 'oauth',
    title: 'GitHub OAuth',
    description:
      'GitHub securely verifies your identity without exposing your password.',
    icon: GitHubLogoIcon,
    accentColor: '#4F46E5',
  },
  {
    id: 'https',
    title: 'HTTPS Encryption',
    description:
      'Encrypted communication protects information exchanged between your browser and our services.',
    icon: LockKeyhole,
    accentColor: '#0EA5E9',
  },
  {
    id: 'readonly',
    title: 'Read-only Access',
    description:
      'GitScope analyzes repository information without requesting modification permissions.',
    icon: ShieldCheck,
    accentColor: '#22C55E',
  },
  {
    id: 'storage',
    title: 'Protected Local Storage',
    description:
      'Only essential browser data such as preferences and cached analytics is stored locally.',
    icon: Database,
    accentColor: '#F59E0B',
  },
  {
    id: 'infrastructure',
    title: 'Secure Infrastructure',
    description:
      'Modern hosting and monitoring practices help keep GitScope reliable and resilient.',
    icon: Server,
    accentColor: '#EC4899',
  },
];

export const securityOutcome: SecurityOutcome = {
  badge: 'Protected Outcome',
  title: 'Privacy and Security Working Together.',
  description:
    'Every layer in GitScope contributes to protecting your information, limiting permissions, and providing transparent analytics without requesting unnecessary access.',
  accentColor: '#22C55E',
  items: [
    {
      id: 'minimal-access',
      label: 'Minimal GitHub permissions',
    },
    {
      id: 'encrypted',
      label: 'Encrypted communication',
    },
    {
      id: 'readonly',
      label: 'Read-only repository access',
    },
    {
      id: 'privacy',
      label: 'Privacy-first analytics',
    },
  ],
};

export const securityBanner: TrustBanner = {
  badge: 'Trust Commitment',
  title: 'Your GitHub Account Always Stays in Your Control.',
  description:
    'GitScope is designed around transparency and minimal access. Public analytics remain available without authentication, while personalized experiences require secure GitHub sign-in.',
  icon: ShieldCheck,
  accentColor: '#22C55E',
  highlights: [
    {
      id: 'privacy',
      title: 'Privacy First',
      description:
        'GitScope only requests the permissions needed to deliver analytics and personalized features.',
      icon: Fingerprint,
      accentColor: '#0EA5E9',
    },
    {
      id: 'choice',
      title: 'Authentication is Your Choice',
      description:
        'Browse public analytics without signing in. Authentication only unlocks advanced features such as Compare Users, Repository Details, and your personalized dashboard.',
      icon: Eye,
      accentColor: '#4F46E5',
    },
  ],
};
