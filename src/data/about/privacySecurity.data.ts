// import GitHubIcon from '@/components/icons/GitHubIcon';
import { SecurityFeature } from '@/types/about';
import { EyeOff, GitGraph, Lock, ShieldCheck } from 'lucide-react';

export const securityFeatures: SecurityFeature[] = [
  {
    id: 'oauth',
    badge: 'OAuth',
    title: 'GitHub Authentication',
    description:
      'Sign in securely using GitHub OAuth without creating another password.',
    icon: GitGraph,
    accentColor: '#3B82F6',
    highlights: [
      'Official GitHub OAuth',
      'No password storage',
      'Trusted authentication',
    ],
  },
  {
    id: 'privacy',
    badge: 'Read Only',
    title: 'Privacy First',
    description:
      'GitScope analyzes only publicly available repository information and never modifies your respositories.',
    icon: EyeOff,
    accentColor: '#10b981',
    highlights: [
      'Read-only access',
      'Public repository data',
      'No repository changes',
    ],
  },
  {
    id: 'security',
    badge: 'Encrypted',
    title: 'Secure by Design',
    description:
      'Authentication tokens are handled securely and communication is protected using HTTPS.',
    icon: Lock,
    accentColor: '#F59E0B',
    highlights: [
      'HTTPS encryption',
      'Secure token handling',
      'Protected sessions',
    ],
  },
  {
    id: 'trust',
    badge: 'Verified',
    title: 'Built for Trust',
    description:
      'Every feature is designed to give developers confidence in how their GitHub data is accessed and displayed.',
    icon: ShieldCheck,
    accentColor: '#8B5CF6',
    highlights: [
      'Transparent permissions',
      'Minimal access',
      'Developer focused',
    ],
  },
];
