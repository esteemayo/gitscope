import { Database, Eye, LockKeyhole, Server, ShieldCheck } from 'lucide-react';
import { SecurityFeature } from '@/types/privacy/dataStorageSecurity';

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
