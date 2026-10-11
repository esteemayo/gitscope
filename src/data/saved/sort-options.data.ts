import {
  ArrowDownUp,
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
  GitFork,
  Star,
  Users2,
} from 'lucide-react';

import { SortDirectionOption, SortOption } from '@/types/saved';

export const savedSortOptions: SortOption[] = [
  {
    label: 'Recently viewed',
    value: 'recent',
    icon: ArrowDownUp,
  },
  {
    label: 'Stars',
    value: 'stars',
    icon: Star,
  },
  {
    label: 'Repositories',
    value: 'repositories',
    icon: GitFork,
  },
  {
    label: 'Followers',
    value: 'followers',
    icon: Users2,
  },
];

export const savedSortDirections: SortDirectionOption[] = [
  {
    label: 'Highest first',
    value: 'desc',
    icon: ArrowDownWideNarrow,
  },
  {
    label: 'Lowest first',
    value: 'asc',
    icon: ArrowUpNarrowWide,
  },
];
