import {
  CircleUserRound,
  FileCheck2,
  KeyRound,
  UserRoundX,
} from 'lucide-react';

import {
  SurvivingObligationType,
  TerminationEffectType,
  TerminationPathData,
} from '@/types/terms/termination';

export const terminationPaths: TerminationPathData[] = [
  {
    id: 'user',
    label: 'Your decision',
    title: 'You end your access',
    description:
      'You may stop using GitScope or close your account where account deletion or closure functionality is available.',
    action: 'Account relationship ends',
    icon: CircleUserRound,
    accentColor: '#60A5FA',
  },
  {
    id: 'platform',
    label: 'Platform enforcement',
    title: 'GitScope ends access',
    description:
      'We may terminate an account where continued access is no longer appropriate or permitted under these Terms or applicable requirements.',
    action: 'Access is permanently removed',
    icon: UserRoundX,
    accentColor: '#EF4444',
  },
];

export const terminationEffects: TerminationEffectType[] = [
  {
    id: 'access-ends',
    title: 'Access ends',
    description:
      'You may lose access to authenticated features, account functionality, and restricted areas of GitScope.',
    icon: KeyRound,
    accentColor: '#F97316',
  },
  {
    id: 'account-status',
    title: 'Account is closed',
    description:
      'The account may no longer be available for normal use and may be marked as closed or terminated within the service.',
    icon: UserRoundX,
    accentColor: '#F59E0B',
  },
  {
    id: 'data-handling',
    title: 'Data is handled under our policies',
    description:
      'Account-related information is handled in accordance with applicable retention, deletion, legal, and operational requirements.',
    icon: FileCheck2,
    accentColor: '#34D399',
  },
];

export const terminationSurvivingObligations: SurvivingObligationType[] = [
  {
    id: 'legal',
    title: 'Legal obligations',
    description:
      'Rights, responsibilities, and restrictions that by their nature continue after termination remain effective.',
    accentColor: '#A78BFA',
  },
  {
    id: 'liability',
    title: 'Liability limitations',
    description:
      'The limitations of liability and related protections described in these Terms continue where applicable.',
    accentColor: '#F472B6',
  },
  {
    id: 'disputes',
    title: 'Disputes and enforcement',
    description:
      'Provisions relating to governing law, dispute resolution, intellectual property, and enforcement may survive termination.',
    accentColor: '#F59E0B',
  },
];
