import { type LucideIcon } from 'lucide-react';
import { RepositorySort, SortOptionsType } from './index';

export interface SortDropdownProps {
  label: string;
  isOpen: boolean;
  value: RepositorySort;
  options: SortOptionsType[];
  icon?: LucideIcon;
  type?: 'filter' | 'sort';
  onToggle(): void;
  onChange(value: RepositorySort): void;
  ariaLabel: string;
}
