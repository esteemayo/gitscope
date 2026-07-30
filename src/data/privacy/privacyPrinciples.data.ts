import {
  Eye,
  Fingerprint,
  LockKeyhole,
  Scale,
  ShieldCheck,
  UserCog,
} from 'lucide-react';
import { PrivacyPrincipleItem } from '@/types/privacy';

export const privacyPrinciples: PrivacyPrincipleItem[] = [
  {
    id: 'data-minimization',
    eyebrow: 'Collect Less',
    title: 'Data Minimization',
    description:
      'GitScope only requests the GitHub information required to generate repository insights, analytics, and profile statistics. We never request permissions that are unrelated to the experience you expect.',
    icon: ShieldCheck,
    accentColor: '#22C55E',
    highlights: [
      'Read-only GitHub access',
      'Only essential profile information',
      'No unnecessary permission requests',
    ],
    cta: {
      label: 'View collected data',
      href: '#information-collected',
    },
  },
  {
    id: 'transparency',
    eyebrow: 'Nothing Hidden',
    title: 'Transparency',
    description:
      'You always know why information is requested, how it is processed, and where it is used throughout GitScope.',
    icon: Eye,
    accentColor: '#0EA5E9',
    highlights: [
      'Clear permission explanations',
      'Open privacy documentation',
      'Easy-to-understand policies',
    ],
    cta: {
      label: 'Learn about permission',
      href: '#github-permissions',
    },
  },
  {
    id: 'security',
    eyebrow: 'Built Securely',
    title: 'Security by Default',
    description:
      'Security is integrated into every layer of GitScope, fromauthentication and encrypted communication to infrastructure and session management.',
    icon: LockKeyhole,
    accentColor: '#4F46E5',
    highlights: [
      'Encrypted connections',
      'Secure authentication',
      'Protected user sessions',
    ],
    cta: {
      label: 'Explore security',
      href: '#security',
    },
  },
  {
    id: 'user-control',
    eyebrow: 'Your Account',
    title: 'You Stay in Control',
    description:
      'You decide when GitScope can access your GitHub account, and you can revoke access or remove stored information whenever you choose.',
    icon: UserCog,
    accentColor: '#F59E0B',
    highlights: [
      'Disconnect GitHub anytime',
      'Manage connected sessions',
      'Delete stored information',
    ],
    cta: {
      label: 'Manage your data',
      href: '#user-rights',
    },
  },
  {
    id: 'accountability',
    eyebrow: 'Responsibility',
    title: 'Accountability',
    description:
      'Every privacy decision is made with clear responsibility. We continuously review our practices to ensure they remain secure, transparent, and aligned with user expectations.',
    icon: Scale,
    accentColor: '#8B5CF6',
    highlights: [
      'Continuous privacy reviews',
      'Responsible data handling',
      'Transparent governance',
    ],
    cta: {
      label: 'Read our commitments',
      href: '#privacy-commitments',
    },
  },
  {
    id: 'privacy-design',
    eyebrow: 'Designed First',
    title: 'Privacy by Design',
    description:
      'Privacy is considered from the beginning of every feature. New capabilities are designed with minimal data collection, secure defaults, and user trust as core requirements.',
    icon: Fingerprint,
    accentColor: '#EF4444',
    highlights: [
      'Secure defaults',
      'Minimal data exposure',
      'Privacy-focused architecture',
    ],
    cta: {
      label: 'See our architecture',
      href: '#architecture',
    },
  },
];
