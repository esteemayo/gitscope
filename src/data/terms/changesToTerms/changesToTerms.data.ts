import {
  BellRing,
  FilePenLine,
  FileSearch,
  GitPullRequest,
  Scale,
  Settings2,
  ShieldCheck,
  UserRoundCheck,
  XCircle,
} from 'lucide-react';

import {
  ChangeLifecycleStepData,
  ChangeReasonType,
  UserOptionType,
} from '@/types/terms/changesToTerms';

export const changesToTermsReasons: ChangeReasonType[] = [
  {
    id: 'service-evolution',
    title: 'Service evolution',
    description:
      'New features, workflows, or changes to GitScope may require updates to how the Terms describe your use of the platform.',
    icon: Settings2,
    accentColor: '#60A5FA',
  },
  {
    id: 'legal-requirements',
    title: 'Legal requirements',
    description:
      'We may update the Terms where laws, regulations, or other legal obligations change or require additional provisions.',
    icon: Scale,
    accentColor: '#A78BFA',
  },
  {
    id: 'security',
    title: 'Security and protection',
    description:
      'Changes may be made to address new security requirements, abuse prevention, or protection of GitScope and its users.',
    icon: ShieldCheck,
    accentColor: '#34D399',
  },
];

export const changesToTermsLifecycle: ChangeLifecycleStepData[] = [
  {
    id: 'review',
    title: 'Review',
    description:
      'We review the Terms and identify provisions that require revision or clarification.',
    icon: FileSearch,
    accentColor: '#60A5FA',
  },
  {
    id: 'publish',
    title: 'Publish',
    description:
      'The revised Terms are published with an updated effective or last updated date.',
    icon: GitPullRequest,
    accentColor: '#A78BFA',
  },
  {
    id: 'notify',
    title: 'Notify',
    description:
      'Where appropriate, we provide notice of material changes through available service or account communication channels.',
    icon: BellRing,
    accentColor: '#F59E0B',
  },
  {
    id: 'effective',
    title: 'Effective',
    description:
      'The updated Terms take effect on the stated effective date or as otherwise communicated.',
    icon: FilePenLine,
    accentColor: '#34D399',
  },
];

export const changesToTermsOptions: UserOptionType[] = [
  {
    id: 'continue',
    title: 'Continue using GitScope',
    description:
      'Your continued use of the service after updated Terms take effect may constitute acceptance of the revised Terms, where permitted by applicable law.',
    action: 'Continue under updated Terms',
    icon: UserRoundCheck,
    accentColor: '#34D399',
  },
  {
    id: 'stop',
    title: 'Stop using GitScope',
    description:
      'If you do not agree with revised Terms, you should stop using GitScope and may end your use of the service in accordance with these Terms.',
    action: 'End use of the service',
    icon: XCircle,
    accentColor: '#EF4444',
  },
];
