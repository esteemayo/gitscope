import {
  Archive,
  Clock3,
  Database,
  EyeOff,
  HardDrive,
  ShieldCheck,
  Trash2,
} from 'lucide-react';

import {
  RetentionCategory,
  RetentionNoticeData,
  RetentionStat,
} from '@/types/privacy/dataRetention';

export const retentionStats: RetentionStat[] = [
  {
    id: 'purpose-driven',
    value: 'Purpose',
    label: 'Retention Model',
    description:
      'Information is retained according to why it is needed, rather than stored indefinitely.',
    icon: Database,
    accentColor: '#4F46E5',
  },
  {
    id: 'limited',
    value: 'Limited',
    label: 'Storage Approach',
    description:
      'GitScope avoids keeping information longer than required for its intended purpose.',
    icon: Clock3,
    accentColor: '#0EA5E9',
  },
  {
    id: 'controlled',
    value: 'Controlled',
    label: 'Data Lifecycle',
    description:
      'Stored information is subject to application controls and appropriate deletion processes.',
    icon: ShieldCheck,
    accentColor: '#22C55E',
  },
];

export const retentionCategories: RetentionCategory[] = [
  {
    id: 'account',
    title: 'Account Information',
    description:
      'Information associated with an authenticated GitScope account.',
    retention: 'While your account remains active',
    reason:
      'Required to maintain authentication and provide account-specific features.',
    icon: HardDrive,
    accentColor: '#8B5CF6',
  },
  {
    id: 'github',
    title: 'GitHub Authorization',
    description:
      'Authorization information used to provide authenticated GitHub features.',
    retention: 'While authorization is required',
    reason:
      'Used to maintain the authenticated connection and provide requested protected features.',
    icon: ShieldCheck,
    accentColor: '#22C55E',
  },
  {
    id: 'cached',
    title: 'Cached Analytics',
    description:
      'Locally cached information used to improve the responsiveness of GitScope.',
    retention: 'Until the cache expires or is cleared',
    reason:
      'Used to reduce unnecessary requests and improve the user experience.',
    icon: Archive,
    accentColor: '#F59E0B',
  },
  {
    id: 'activity',
    title: 'Application Activity',
    description:
      'Limited technical information associated with application usage and security.',
    retention: 'Only for as long as operationally required',
    reason:
      'Used to maintain reliability, troubleshoot issues, and protect the application.',
    icon: EyeOff,
    accentColor: '#0EA5E9',
  },
];

export const retentionNotice: RetentionNoticeData = {
  badge: 'Data Lifecycle',
  title: "We Don't Keep Information Without a Purpose.",
  description:
    "GitScope's retention approach is based on purpose, necessity, and user control. When information is no longer required for its intended purpose, it should be removed, anonymized, or allowed to expire according to the applicable data lifecycle.",
  icon: Trash2,
  accentColor: '#EF4444',
};
