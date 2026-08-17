import { CalendarDays, Clock3, GitBranch } from 'lucide-react';
import { TermsUpdatedItemData } from '@/types/terms/termsUpdated';

export const termsUpdatedItems: TermsUpdatedItemData[] = [
  {
    label: 'Last updated',
    value: 'August 15, 2026',
    icon: CalendarDays,
    accentColor: '#6366F1',
  },
  {
    label: 'Current version',
    value: 'Version 2.0',
    icon: GitBranch,
    accentColor: '#F59E0B',
  },
  {
    label: 'Estimated reading time',
    value: '8 minutes',
    icon: Clock3,
    accentColor: '#0EA5E9',
  },
];
