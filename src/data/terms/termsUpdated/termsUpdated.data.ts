import { CalendarDays, Clock3, GitBranch } from 'lucide-react';
import { TermsUpdatedItemData } from '@/types/terms/termsUpdated';

export const termsUpdatedItems: TermsUpdatedItemData[] = [
  {
    label: 'Last updated',
    value: 'August 15, 2026',
    icon: CalendarDays,
  },
  {
    label: 'Version',
    value: '2.0',
    icon: GitBranch,
  },
  {
    label: 'Reading time',
    value: '8 min read',
    icon: Clock3,
  },
];
