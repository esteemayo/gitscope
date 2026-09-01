import {
  Ban,
  CircleCheck,
  Eye,
  FileWarning,
  LockKeyhole,
  ShieldAlert,
  UserRoundX,
} from 'lucide-react';

import {
  AccountStatusStepType,
  EnforcementNoticeData,
  SuspensionReasonType,
} from '@/types/terms/accountSuspension';

export const accountSuspensionStatusSteps: AccountStatusStepType[] = [
  {
    id: 'active',
    title: 'Active',
    description:
      'The account has normal access to supported GitScope features.',
    icon: CircleCheck,
    accentColor: '#34D399',
  },

  {
    id: 'review',
    title: 'Under Review',
    description:
      'Account activity may be reviewed where potential misuse or a Terms violation is identified.',
    icon: Eye,
    accentColor: '#60A5FA',
  },

  {
    id: 'restricted',
    title: 'Restricted',
    description:
      'Access to specific features or parts of the service may be temporarily limited.',
    icon: LockKeyhole,
    accentColor: '#F59E0B',
  },

  {
    id: 'suspended',
    title: 'Suspended',
    description:
      'Account access may be temporarily disabled while the issue is assessed or resolved.',
    icon: ShieldAlert,
    accentColor: '#F97316',
  },

  {
    id: 'terminated',
    title: 'Terminated',
    description:
      'The account may lose permanent access to GitScope where continued access is no longer permitted.',
    icon: Ban,
    accentColor: '#EF4444',
  },
];

export const accountSuspensionReasons: SuspensionReasonType[] = [
  {
    id: 'terms-violation',
    label: 'Terms violation',
    title: 'Violation of these Terms',
    description:
      'We may restrict or suspend access where an account violates applicable terms, restrictions, or service requirements.',
    icon: FileWarning,
    accentColor: '#A78BFA',
  },

  {
    id: 'prohibited-use',
    label: 'Prohibited activity',
    title: 'Misuse of GitScope',
    description:
      'Suspension may occur where the service is used in a prohibited, abusive, harmful, or unauthorized manner.',
    icon: ShieldAlert,
    accentColor: '#F59E0B',
  },

  {
    id: 'security-risk',
    label: 'Security risk',
    title: 'Threats to platform security',
    description:
      'Access may be limited where account activity creates or is reasonably suspected to create a security risk.',
    icon: LockKeyhole,
    accentColor: '#60A5FA',
  },

  {
    id: 'service-integrity',
    label: 'Platform integrity',
    title: 'Disruption or interference',
    description:
      'We may take action against activity that disrupts, degrades, interferes with, or threatens the reliable operation of GitScope.',
    icon: UserRoundX,
    accentColor: '#F472B6',
  },
];

export const accountSuspensionNotice: EnforcementNoticeData = {
  title: 'Enforcement action may be immediate',
  description:
    'Where reasonably necessary to protect GitScope, its infrastructure, users, or external integrations, we may restrict or suspend access without prior notice. Suspension does not prevent GitScope from taking further action where permitted under these Terms or applicable law.',
  points: [
    'Access may be restricted to specific features or disabled entirely',
    'Enforcement may be temporary or permanent depending on the circumstances',
    'We may take immediate action where notice would increase a security or operational risk',
  ],
  icon: ShieldAlert,
  accentColor: '#EF4444',
};
