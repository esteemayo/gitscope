import { FileCheck2, ShieldCheck } from 'lucide-react';
import {
  PolicyUpdate,
  PolicyUpdatesNoticeData,
} from '@/types/privacy/policyUpdatesTimeline';

export const policyUpdates: PolicyUpdate[] = [
  {
    id: 'initial-policy',
    version: '1.0',
    date: 'August 2026',
    title: 'Initial Privacy Policy',
    description:
      'The initial Privacy Policy establishes how GitScope handles information, authentication, analytics data, storage, security, and user privacy.',
    changes: [
      'Defined the information GitScope collects',
      'Explained GitHub permissions and authentication',
      'Documented data storage and retention practices',
      'Outlined user privacy rights and controls',
    ],
    icon: FileCheck2,
    accentColor: '#8B5CF6',
    isCurrent: true,
  },
];

export const policyUpdatesNotice: PolicyUpdatesNoticeData = {
  badge: 'Policy Changes',
  title: 'We Will Keep This Timeline Updated.',
  description:
    'When we make material changes to this Privacy Policy, we will update the version and date shown here so you can understand when the policy was revised.',
  icon: ShieldCheck,
  accentColor: '#22C55E',
};
