import { Eye, Fingerprint, ShieldCheck } from 'lucide-react';
import { TrustBanner } from '@/types/privacy/dataStorageSecurity';

export const securityBanner: TrustBanner = {
  badge: 'Trust Commitment',
  title: 'Your GitHub Account Always Stays in Your Control',
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
