import type { LucideIcon } from 'lucide-react';

export type SavedView = 'grid' | 'list';

export type SortField = 'recent' | 'stars' | 'repositories' | 'followers';

export type SortDirection = 'desc' | 'asc';

export interface SortOption {
  label: string;
  value: SortField;
  icon: LucideIcon | React.ComponentType;
}

export interface SortDirectionOption {
  label: string;
  value: SortDirection;
  icon: LucideIcon | React.ComponentType;
}
