import { SecurityOutcome } from '@/types/privacy/dataStorageSecurity';

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
